const checksum = require("./checksum");
const getChecksum = checksum.getChecksum;

describe("checksum", () => {
  describe("getChecksum", () => {
    test("calculates checksum correctly", () => {
      const inputs = [
        "abcdef",
        "bababc",
        "abbcde",
        "abcccd",
        "aabcdd",
        "abcdee",
        "ababab"
      ];
      expect(getChecksum(inputs)).toEqual(12);
    });
  });
});
