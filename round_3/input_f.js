
let path = require("path")
let fs = require("fs");
const { execSync } = require("child_process");

let _test_count = 15;
let _min = 1;
let _max = 100;
let _root = "f";

let random = (a, b) => {
    return Math.floor(Math.random() * (b - a)) + a;
}

let output = (id, params) => {
    let { a, b, c } = params;
    let res = Math.max(b - a, c - b) - 1;
    fs.writeFileSync(path.join(__dirname, _root, `output${id}.txt`), `${res}`, { encoding: "utf-8" })
}

let input = (id) => {
    let a = (random(_min, _max - 2));
    let b = (random(a + 1, _max - 1));
    let c = (random(b + 1, _max));
    output(id, { a, b, c });
    fs.writeFileSync(path.join(__dirname, _root, `input${id}.txt`), `${a} ${b} ${c}`, { encoding: "utf-8" })
}

for (let i = 1; i <= _test_count; i++) input(i);

// all test case to ziped
execSync(`zip -j testcase_${_root}.zip ${path.join(__dirname, _root, `*.txt`)}`);
