const Product = value => ({
  value,
  concat: y => Product(value * y.value)
})

const Max = value => ({
  value,
  concat: y => Max(Math.max(value, y.value))
});

const Min = value => ({
  value,
  concat: y => Min(Math.min(value, y.value))
});

const maxTest = Max(10).concat(Max(5)).concat(Max(17));
const minTest = Min(10).concat(Min(15)).concat(Min(7));

console.log("Max test ###", maxTest);
console.log("Min test ###", minTest);
