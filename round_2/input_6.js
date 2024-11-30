
const path = require("path")
const fs = require("fs")

function generateTestCase(idx) {
    let t = Math.floor(Math.random() * 100000) + 1;

    if (idx < 3) t = idx + 2
    let str = `${t}\n`;

    fs.writeFileSync(path.join(__dirname, "./6", `input${idx}.txt`), str, { encoding: "utf-8" })
}

for (let i = 0; i < 15; i++) {
    generateTestCase(i)
}