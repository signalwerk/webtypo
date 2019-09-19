import R from "ramda";
import fs from "fs";

const shuffler = R.curry((random, list) => {
    const len = list.length;
    let idx = -1;
    let position;
    let result = [];
    while (++idx < len) {
      position = Math.floor((idx + 1) * random());
      result[idx] = result[position];
      result[position] = list[idx];
    }
    return result;
  }),
  shuffle = shuffler(Math.random);

const pickRandom = R.ifElse(
  R.is(Array),
  R.compose(R.head, shuffle),
  R.identity
);

let generate = (count, rule) => {
  return R.join(
    "\n",
    R.map(index => R.join("", R.map(pickRandom, rule)), R.range(0, count))
  );
};

let students = [
  "dan",
  "nina",
  "sam",
  "samira",
  "stefanos",
  "patrick",
  "chantal",
  "joshua",
  "desiree",
  "sina",
  "dhondup",
  "selina",
  "flavia",
  "cheyenne",
  "dominique"
];

let quote = [
  ["'", '"', "`", "¨", "’", "”", "“", "„"],
  [
    "Woher weisst du das?",
    "Wer war nochmal der Astronaut da drüben?",
    "Du bist nie da!",
    "Deine Mutter ist nicht meine Freundin!"
  ],
  ["'", '"', "`", "¨", "’", "”", "“", "„"],
  " ",
  ["sagt", "schreit", "flüstert"],
  " ",
  ["Karl", "Sandra", "der Pabst", "die Bundesrätin"],
  "."
];

let weirdDash = [["E-Mail", "E-Games"], "–", ["Übertragung", "Newsletter"]];

let placeDash = [
  "Streckenunterbruch: ",
  ["Zürich", "Bern", "Basel"],
  ["-", "–"],
  ["Olten", "Genf"],
  " ",
  ["verspätet", "gesperrt"],
  "."
];

let math = [
  ["42", "2", "33", "26", "593", "5"],
  ["+", "-", "*", "/"],
  ["34", "3456", "286", "1", "45", "573"],
  ["+", "-", "*", "/"],
  ["32", "54", "5664", "76", "34", "3"],
  "=",
  ["a", "c", "b"]
];

let ellipse = [
  ["'", '"', "`", "¨", "’", "”", "“", "„"],
  ["Hans", "Rolf", "Karl"],
  " - du bist ist ein ",
  ["Ar", "Id"],
  "..",
  ["'", '"', "`", "¨", "’", "”", "“", "„"]
];

let longDate = [
  R.range(1, 28),
  ".",
  [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  " ",
  R.range(1981, 1999)
];
let shortDate = [R.range(1, 28), ".", R.range(1, 12), ".", R.range(1981, 1999)];

let smallUnit = [
  R.range(1, 9999),
  " ",
  [
    "km lang",
    "l Milch",
    "cl Schnaps",
    "min. sind vergangen",
    "°C heiss",
    "g Brot",
    "kg Stahl",
    "s bis zum Start"
  ]
];

let bigUnit = [
  R.range(100000, 999999),
  " ",
  [
    "Kilometer",
    "Liter",
    "Ohm",
    "Kelvin",
    "Grad",
    "Gramm",
    "Kilogramm",
    "Sekunden"
  ]
];

let names = [
  ["Prof.", "Dr.", "Lic.", "Jur."],
  ["Prof.", "Dr.", "Lic.", "Jur."],
  ["S.", "K."],
  ["Mayer", "Maier", "Meyer", "Meier"]
];

students.forEach(student => {
  let exampleOut =
    "Diese Datei ist UTF-8 encoded (äöüÄÖÜ):\n" +
    R.join(
      "\n",
      shuffle([
        generate(2, quote),

        generate(1, weirdDash),
        generate(1, placeDash),

        generate(1, math),
        generate(1, ellipse),

        generate(1, longDate),
        generate(1, shortDate),

        generate(1, smallUnit),
        generate(1, bigUnit),

        generate(1, names),
        generate(1, [R.range(12, 30), "°"]),
        generate(1, [["§", "Nr."], R.range(12, 30)])
      ])
    );

  fs.writeFileSync("./manus/" + student + ".txt", exampleOut);
});

console.log(
  // quotes
  "done"
);
