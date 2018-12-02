const getCountsPerLetter = ids => {
  const letters = ids.split("");
  const counts = {};
  letters.forEach(letter => {
    counts[letter] = (counts[letter] ? counts[letter] : 0) + 1;
  });
  return counts;
};

const hasDoubleLetter = counts => {
  return (
    Object.entries(counts).filter(([letter, count]) => {
      return count === 2;
    }).length > 0
  );
};

const hasTripleLetter = counts => {
  return (
    Object.entries(counts).filter(([letter, count]) => {
      return count === 3;
    }).length > 0
  );
};

const getCounts = (ids = []) => {
  let numberOfTwos = 0;
  let numberOfThrees = 0;
  ids.forEach(id => {
    const counts = getCountsPerLetter(id);
    numberOfTwos += hasDoubleLetter(counts);
    numberOfThrees += hasTripleLetter(counts);
  });
  return { numberOfTwos, numberOfThrees };
};

const getChecksum = (ids = []) => {
  const { numberOfTwos, numberOfThrees } = getCounts(ids);
  console.log("numberOfTwos", numberOfTwos, "numberOfThrees", numberOfThrees);
  return numberOfTwos * numberOfThrees;
};
module.exports = { getChecksum };
