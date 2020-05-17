
const utils = {
  trace: label => value => {
    console.log(`${label}::`, value);
    return value
  },
  createArray: size =>
    Array.from({ length: size }, (v, i) => i),
  arrayOfRandoms: randomCeil => length =>
    Array.from({ length: length }, (v, i) =>
      Math.floor(Math.random() * randomCeil))
}
module.exports = utils;
