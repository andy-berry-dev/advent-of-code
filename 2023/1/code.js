const fs = require("fs");
const path = require("path");

const input = fs.readFileSync(path.resolve(__dirname, "input.txt")).toString();

const numMappings = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const calibrationSum = input.split("\n").reduce((sum, nextLine) => {
  //   const numbers = nextLine.match(
  //     /([0-9]|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine))/g
  //   );
  // const [first] = numbers.slice(0);
  // const [last] = numbers.slice(-1);

  const [, first] = nextLine.match(
    /^.*?(\d|one|two|three|four|five|six|seven|eight|nine)/
  );
  const [, last] = nextLine.match(
    /^.*(\d|one|two|three|four|five|six|seven|eight|nine).*?$/
  );

  const firstAsNum = first.length > 1 ? numMappings[first] : first;
  const lastAsNum = last.length > 1 ? numMappings[last] : last;

  const code = parseInt(`${firstAsNum}${lastAsNum}`);

  console.error([nextLine, code]);
  return sum + code;
}, 0);

console.error(calibrationSum);
