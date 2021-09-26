const fetch = require("node-fetch");
const he = require("he");
const fs = require("fs");

Array.prototype.forEachAsync = async function (fn) {
  for (let t of this) {
    await fn(t);
  }
};

let codepoints = [
  { hex: "200B", de: "Breitenloses Leerzeichen", context: "M" },
  { hex: "0020", de: "Leerzeichen", context: "M" },
  { hex: "00A0", de: "Leerzeichen ohne Umbruch", context: "M" },
  { hex: "2009", de: "schmales Leerzeichen", context: "M" },
  { hex: "202F", de: "schmales Leerzeichen ohne Umbruch", context: "M" },
  { hex: "200A", de: "Haarspatium", context: "M" },
  { hex: "2006", de: "Sechstelgeviert-Leerzeichen", context: "M" },
  { hex: "2005", de: "Viertelgeviert-Leerzeichen", context: "M" },
  { hex: "2004", de: "Drittelgeviert-Leerzeichen", context: "M" },
  { hex: "2002", de: "Halbgeviert-Leerzeichen", context: "M" },
  { hex: "2003", de: "Geviert-Leerzeichen", context: "M" },
  { hex: "2007", de: "Ziffernleerzeichen", context: "0", class: "gray" },
  { hex: "2008", de: "Interpunktionsleerzeichen", context: ".", class: "gray" },
];


const url = "https://ucdapi.org/unicode/latest/codepoint/hex/";

const getData = async (hex) => {
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

const main = async () => {
  let table = [];

  await codepoints.forEachAsync(async (codepoint) => {
    let hex = codepoint.hex;
    let result = await getData(hex);
    let dec = parseInt(hex, 16);
    let text = String.fromCharCode(dec);
    let html = he.encode(text, {
      useNamedReferences: true,
    });
    if (html === text) {
      html = null;
    }
    if (html && /&#x([A-Fa-f0-9]+);/.test(html)) {
      html = null;
    }

    table.push({
      ...codepoint,
      class: codepoint.class || "default",
      name: result.name,
      hex,
      dec,
      text,
      html,
    });
  });

  fs.writeFileSync("table.json", JSON.stringify(table, null, 2));
};

main();
