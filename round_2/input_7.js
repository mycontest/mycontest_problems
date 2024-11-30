const path = require("path");
const fs = require("fs");

function generateTestCase(idx) {
    // Generate random hours and minutes
    let hours = Math.floor(Math.random() * 24); // 0 to 23
    let minutes = Math.floor(Math.random() * 60); // 0 to 59

    // Format hours and minutes to always have two digits (e.g., 01, 09, 23)
    let time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    // For the first few indices, optionally set specific times
    if (idx < 3) {
        let predefinedTimes = ["01:23", "12:21", "00:00"];
        time = predefinedTimes[idx];
    }

    // Write the formatted time to a file
    fs.writeFileSync(
        path.join(__dirname, "./7", `input${idx}.txt`),
        time,
        { encoding: "utf-8" }
    );
}

for (let i = 0; i < 15; i++) {
    generateTestCase(i);
}
