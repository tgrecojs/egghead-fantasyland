const Sum = value => ({
  value,
  concat: y => Sum(valuegu + y.value)
});

console.log(
  Sum(20).concat(Sum(10))
)
