const fetch = require("node-fetch");
const he = require("he");
const fs = require("fs");

Array.prototype.forEachAsync = async function(fn) {
  for (let t of this) {
    await fn(t);
  }
};

let codepoints = [
  { hex: "200B", de: "Breitenloses Leerzeichen", context: "M" },
  { hex: "0020", de: "Leerzeichen", context: "M" },
  { hex: "00A0", de: "Leerzeichen ohne Umbruch", context: "M" },
  { hex: "2009", de: "schmales Leerzeichen", context: "M" },
  { hex: "202F", de: "schmales umbruchgeschütztes Leerzeichen", context: "M" },
  { hex: "200A", de: "Haarspatium", context: "M" },
  { hex: "2006", de: "Sechstelgeviert-Leerzeichen", context: "M" },
  { hex: "2005", de: "Viertelgeviert-Leerzeichen", context: "M" },
  { hex: "2004", de: "Drittelgeviert-Leerzeichen", context: "M" },
  { hex: "2002", de: "Halbgeviert-Leerzeichen", context: "M" },
  { hex: "2003", de: "Geviert-Leerzeichen", context: "M" },
  { hex: "2007", de: "Ziffernleerzeichen", context: "0", class: "gray" },
  { hex: "2008", de: "Interpunktionsleerzeichen", context: ".", class: "gray" }
];

let captions = [
  {
    caption: "Beispiel",
    writer: item =>
      `<span class="example example--${item.class ||
        "default"}"><span class="filler filler--prefix"><span class="filler-char">${
        item.context
      }</span></span><span class="space">&#${
        item.dec
      };</span><span class="filler-char"><span class="filler filler--postfix">${
        item.context
      }</span></span></span>`
  },
  // { caption: "Text", writer: item => `'&#${item.dec};'` },
  // {
  //   caption: "HTML · Entitätenreferenz",
  //   writer: item => (item.html ? `\`${item.html}\`` : "")
  // },
  // { caption: "HTML · dezimal", writer: item => `\`&#${item.dec};\`` },
  // { caption: "HTML · hexadezimal", writer: item => `\`&#x${item.hex};\`` },
  // { caption: "Unicode Name", writer: item => `${item.name}` },
  {
    caption: "Name",
    writer: item =>
      `<span class="name-german">${
        item.de
      }</span><br/><span class="name-unicode">${item.name}</span>`
  },

  {
    caption: "HTML",
    writer: item => {
      let html = [];

      if (item.html) {
        html.push(`Entitätenreferenz: \`${item.html}\``);
      }
      html.push(`dezimal: \`&#${item.dec};\``);
      html.push(`hexadezimal: \`&#x${item.hex};\``);

      return html.join("<br/>");
    }
  }
];

const url = "https://ucdapi.org/unicode/latest/codepoint/hex/";

const getData = async hex => {
  let json;
  try {
    const response = await fetch(`${url}${hex}`);
    json = await response.json();
    // console.log(json);
  } catch (error) {
    console.log(error);
  }

  return json;
};

const generateTable = (data, captions) => {
  let tabularData = [[]];

  captions.forEach(caption => {
    tabularData[0].push(caption.caption);
  });

  data.forEach(item => {
    let row = [];
    captions.forEach(caption => {
      row.push(caption.writer(item));
    });
    tabularData.push(row);
  });

  return tabularData;
};

const mdTable = data => {
  let output = "";

  data.forEach((col, index) => {
    let txtCol = "|";
    col.forEach(rowValue => {
      if (rowValue) {
        txtCol += ` ${rowValue} |`;
      } else {
        txtCol += " |";
      }
    });

    // after header
    if (index === 1) {
      let line = Array(col.length + 1).join("----|");
      output += `|${line}\n`;
    }
    output += `${txtCol}\n`;
  });

  return output;
};

const main = async () => {
  let table = [];

  await codepoints.forEachAsync(async codepoint => {
    let hex = codepoint.hex;
    let result = await getData(hex);
    let dec = parseInt(hex, 16);
    let text = String.fromCharCode(dec);
    let html = he.encode(text, {
      useNamedReferences: true
    });
    if (html === text) {
      html = null;
    }
    if (html && /&#x([A-Fa-f0-9]+);/.test(html)) {
      html = null;
    }

    table.push({
      ...codepoint,
      name: result.name,
      hex,
      dec,
      text,
      html
    });
  });

  let tableArray = generateTable(table, captions);


  fs.writeFileSync(
    "table.json",
    JSON.stringify(
      table.map(item => ({
        hex: item.hex,
        dec: item.dec,
        name: item.name
      })),
      null,
      2
    )
  );
  fs.writeFileSync("table.md", mdTable(tableArray));
  console.log(mdTable(tableArray));
};

main();
