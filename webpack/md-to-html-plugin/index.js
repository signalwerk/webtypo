/*
original:
https://github.com/KingZhang/markdown-html-webpack-plugin
*/

var fs = require("fs");
var path = require("path");
var marked = require("marked");
var fm = require("front-matter");
const Handlebars = require("handlebars");

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// wow this is ugly...
Handlebars.registerHelper("example", function (text, options) {
  let markers = options.hash.marker
    .split(",")
    .map((item) => item.split("=").map((item) => item.trim()));

  if (!markers.length) {
    return `### ${text}`;
  }

  var title = text;
  var code = `<code>${escapeHtml(text)}</code>`;
  markers.forEach((item, i) => {
    var search = new RegExp(escapeRegExp(item[0]), "g");

    title = title
      .replace(
        search,
        `<span class="mark mark--${i} mark--${item[2] || "normal"}">${
          item[1]
        }</span>`
      )
      .replace("\\n", `<br />`);
    code = code
      .replace("\\n", "")
      .replace(`<code>${item[0]}</code>`, item[0])
      .replace(
        search,
        `</code><code class="mark mark--${i} mark--${
          item[2] || "normal"
        }">&ZeroWidthSpace;${Handlebars.escapeExpression(item[1])}</code><code>`
      );
  });

  let escapedOutput = `
### ${title}

${code}
`;

  return new Handlebars.SafeString(escapedOutput);
});

var rootPath = path.resolve(__dirname, "../..");
var mdReg = /\.md$/g;

/**
 * function to convert markdown to html file
 * @param  {String} dir        current dir
 * @param  {String} exportPath export path -- relative path
 * @param  {String} parentDir  parent dir
 * @param  {String} parentPath parent path -- relative path
 * @return {[type]}            [description]
 */
function generateHTML({
  dir,
  exportPath,
  templateContent,
  parentDir,
  parentPath,
  compilation,
}) {
  var files = fs.readdirSync(dir),
    currentFolder = parentDir ? dir.replace(parentDir, "") : "./",
    parentPath = parentPath || "./",
    generatePath = path.join(rootPath, exportPath, parentPath, currentFolder);

  files.forEach((file) => {
    var filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      try {
        fs.mkdirSync(generatePath);
      } catch (e) {}
      generateHTML({
        dir: filePath,
        exportPath,
        templateContent,
        parentDir: dir,
        parentPath: currentFolder,
        compilation,
      });
    } else {
      let generateFile = path.join(generatePath, file.replace(mdReg, ".html"));

      try {
        fs.mkdirSync(generatePath);
      } catch (e) {}

      if (mdReg.test(file)) {
        // add for watcher
        // https://github.com/webpack/docs/wiki/how-to-write-a-plugin#monitoring-the-watch-graph
        compilation.fileDependencies.add(filePath);

        // if markdown file, convert to html
        let data = fs.readFileSync(filePath, { encoding: "utf8" });
        var content = fm(data);

        // heck yeah let's do handlebars
        let template = Handlebars.compile(content.body);
        let body = template(content.attributes);

        data = marked(body);

        if (templateContent) {
          data = templateContent.replace("{{markdownContent}}", data);

          let rootPath = ".";
          if (currentFolder !== "./") {
            rootPath = `.${currentFolder.replace(/[^\/]+/g, "..")}`;
          }

          data = data.replace(/\{\{root\}\}/g, rootPath);

          if (rootPath !== ".") {
            data = data.replace(/\{\{home\}\}/g, "");
            data = data.replace(/\{\{\/home\}\}/g, "");
          } else {
            data = data.replace(/\{\{home\}\}.*\{\{\/home\}\}/g, "");
          }

          if (content.attributes && content.attributes.title) {
            data = data.replace("{{title}}", content.attributes.title);
          }

          if (content.attributes && content.attributes.description) {
            data = data.replace(
              "{{description}}",
              content.attributes.description
            );
          } else {
            if (content.attributes && content.attributes.title) {
              data = data.replace("{{description}}", content.attributes.title);
            }
          }
        }

        fs.writeFileSync(generateFile, data, { encoding: "utf8" });
      } else {
        // if not markdown file, just copy
        // nodejs v8.5 use copyFileSync
        // fs.copyFileSync(filePath, generateFile);
        // fs.createReadStream(filePath).pipe(fs.createWriteStream(generateFile));
      }
    }
  });
}

function MarkdownPlugin(options) {
  this.filePath = path.join(rootPath, options.filePath);
  this.exportPath = options.exportPath;

  if (options.template) {
    this.templateContent = fs.readFileSync(
      path.join(rootPath, options.template),
      { encoding: "utf8" }
    );
  }
}

MarkdownPlugin.prototype.apply = function (compiler) {
  compiler.plugin("emit", (compilation, callback) => {
    generateHTML({
      dir: this.filePath,
      exportPath: this.exportPath,
      templateContent: this.templateContent,
      compilation,
    });
    callback();
  });
};

module.exports = MarkdownPlugin;
