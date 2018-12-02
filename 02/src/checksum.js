const getCountsPerLetter = ids => {
  const letters = ids.split("");
  console.log("letters", letters);
  const counts = {};
  letters.forEach(letter => {
    counts[letter] = (counts[letter] ? counts[letter] : 0) + 1;
  });
  return counts;
};

const getCounts = (ids = []) => {
  let numberOfTwos = 0;
  let numberOfThrees = 0;
  ids.forEach(id => {
    const counts = getCountsPerLetter(id);
    let numberOfTwosForId = 0;
    let numberOfThreesForId = 0;
    console.log("counts", counts);
    Object.entries(counts).forEach(([countKey, count]) => {
      if (count === 2) {
        numberOfTwosForId = 1; // only count once
      }
      if (count === 3) {
        numberOfThreesForId = 1; // only count once
      }
    });
    numberOfTwos += numberOfTwosForId;
    numberOfThrees += numberOfThreesForId;
  });
  return { numberOfTwos, numberOfThrees };
};

const getChecksum = (ids = []) => {
  const { numberOfTwos, numberOfThrees } = getCounts(ids);
  console.log("numberOfTwos", numberOfTwos, "numberOfThrees", numberOfThrees);
  return numberOfTwos * numberOfThrees;
};
module.exports = { getChecksum };
