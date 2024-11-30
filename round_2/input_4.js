
const path = require("path")
const fs = require("fs")

function generateTestCase(idx) {
    const t = Math.floor(Math.random() * 1000) + 1;
    let str = `${t}\n`;
    fs.writeFileSync(path.join(__dirname, "./4", `input${idx}.txt`), str, { encoding: "utf-8" })
}

for (let i = 0; i < 15; i++) {
    generateTestCase(i)
}