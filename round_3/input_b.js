
let path = require("path")
let fs = require("fs");
const { execSync } = require("child_process");

let _test_count = 15;
let _min = -1e9;
let _max = 1e9;
let _root = "b";

let random = (a, b) => {
    return Math.floor(Math.random() * (b - a)) + a;
}

let output = (id, params) => {
    let { a, b } = params;
    let res = `${b} ${a}`;
    fs.writeFileSync(path.join(__dirname, _root, `output${id}.txt`), `${res}`, { encoding: "utf-8" })
}

let input = (id) => {
    let a = random(_min, _max);
    let b = random(_min, _max);
    if (id == 1) { a = 10; b = 20; }

    output(id, { a, b });
    fs.writeFileSync(path.join(__dirname, _root, `input${id}.txt`), `${a} ${b}`, { encoding: "utf-8" })
}

for (let i = 1; i < _test_count; i++) input(i);

// all test case to ziped
execSync(`zip testcase_${_root}.zip ${path.join(__dirname, _root, `*.txt`)}`);
