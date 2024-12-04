
let path = require("path")
let fs = require("fs");
const { execSync } = require("child_process");

let _test_count = 15;
let _min = 1;
let _max = 1e9;
let _root = "c";

let random = (a, b) => {
    return Math.floor(Math.random() * (b - a)) + a;
}

let output = (id, params) => {
    let { a } = params;
    let res = '-1'

    if (a % 4 === 0) {
        res = `${a / 2}`;
    }

    fs.writeFileSync(path.join(__dirname, _root, `output${id}.txt`), `${res}`, { encoding: "utf-8" })
}

let input = (id) => {
    let a = random(_min, _max);
    if (id == 1) { a = 10; }
    if (id % 4 == 0) { a = a * 4; }
    output(id, { a });
    fs.writeFileSync(path.join(__dirname, _root, `input${id}.txt`), `${a}`, { encoding: "utf-8" })
}

for (let i = 1; i < _test_count; i++) input(i);

// all test case to ziped
execSync(`zip testcase_${_root}.zip ${path.join(__dirname, _root, `*.txt`)}`);
