
const path = require("path")
const fs = require("fs")

function generateTestCase(idx) {
    let t = Math.floor(Math.random() * 100) + 1;

    if (idx < 3) t = idx + 1;
    let str = `${t}\n`;

    for (let i = 0; i < t; i++) {
        const n = Math.floor(Math.random() * 100) + 1; // n is between 1 and 100
        str = str + `${n}\n`;
    }

    fs.writeFileSync(path.join(__dirname, "./3", `input${idx}.txt`), str, { encoding: "utf-8" })
}

for (let i = 0; i < 15; i++) {
    generateTestCase(i)
}