const fs = require("fs");
const checksum = require("./checksum");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" });
const result = checksum.getChecksum(data.split("\n"));
console.log(result);
