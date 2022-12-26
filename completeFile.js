const findSum = function(array) {
  return array.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  })
};

const findFrequency = function(array) {
  const items = {};

  for (const string of array) {
    if (string in items) {
      items[string]++;
    } else {
      items[string] = 1;
    }
  }

  let mostFrequent;
  let leastFrequent;
  let highestFrequency = 0;
  let lowestFrequency = Number.MAX_SAFE_INTEGER;
  
  for (const string in items) {
    const frequency = items[string];
    if (frequency > highestFrequency) {
      highestFrequency = frequency;
      mostFrequent = string;
    }
    if (frequency < lowestFrequency) {
      lowestFrequency = frequency;
      leastFrequent = string;
    }
  }
  return { most: mostFrequent, least: leastFrequent };
};

const isPalindrome = function(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

const largestPair = function(array) {
  let largestProduct = 0;
  
  for (let i = 0; i < array.length - 1; i++) {
    const product = array[i] * array[i + 1];
    if (product > largestProduct) {
      largestProduct = product;
    }
  }
  return largestProduct;
};

const removeParenth = function(str) {
  const openIndex = str.indexOf('(');
  const closeIndex = str.indexOf(')');
  const start = str.substring(0, openIndex);
  const end = str.substring(closeIndex + 1);

  return start + end;
};

const scoreScrabble = function(str) {
  const letterScores = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
  };
  let score = 0;
  
  for (const letter of str) {
    score += letterScores[letter];
  }
  return score;
};
