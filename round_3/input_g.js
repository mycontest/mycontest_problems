
let path = require("path")
let fs = require("fs");
const { execSync } = require("child_process");

let _test_count = 15;
let _min = 2;
let _max = 1e9;
let _root = "g";

let random = (a, b) => {
    return Math.floor(Math.random() * (b - a)) + a;
}

let output = (id, params) => {
    let { n, k } = params;
    for (let i = 0; i < k; i++) {
        if (n % 10 == 0) n = n / 10; else n -= 1;
    }
    res = n;
    fs.writeFileSync(path.join(__dirname, _root, `output${id}.txt`), `${res}`, { encoding: "utf-8" })
}

let input = (id) => {
    let n = (random(_min, _max));
    let k = (random(2, 50));
    output(id, { n, k });
    fs.writeFileSync(path.join(__dirname, _root, `input${id}.txt`), `${n} ${k}`, { encoding: "utf-8" })
}

for (let i = 1; i < _test_count; i++) input(i);

// all test case to ziped
execSync(`zip testcase_${_root}.zip ${path.join(__dirname, _root, `*.txt`)}`);
