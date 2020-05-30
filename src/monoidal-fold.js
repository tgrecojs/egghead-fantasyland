/** Monoids */
const Any = value => ({
  value,
  concat: y => Any(value || y.value)
});

Any.empty = () => Any(false);

const All = value => ({
  value,
  concat: y => All(value && y.value)
});

All.empty = () => All(true);

const Max = value => ({
  value,
  concat: y => Max(Math.max(value, y.value))
});

Max.empty = () => Max(-Infinity);

const Min = value => ({
  value,
  concat: y => Min(Math.min(value, y.value))
});

Min.empty = () => Min(Infinity);

const Product = value => ({
  value,
  concat: y => Product(value * y.value)
});

Product.empty = () => Product(1);

const Sum = value => ({
  value,
  concat: y => Sum(value + y.value)
});

Sum.empty = () => Sum(0);


const data = [1, 2, 3, 4, 5];
// const result = data.map(Sum).reduce((acc, val) => acc.concat(val), Sum.empty());

const fold = monoid => (data = []) => data.reduce((acc, val) => acc.concat(monoid(val)), monoid.empty());
const result = fold(Product)(data);
const sumFold = fold(Sum);

const listOfBools = [true, true, true, false];
console.log(fold(Min)(data), fold(Any)(listOfBools))

