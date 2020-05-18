const Any = value => ({
  value,
  concat: y => Any(value || y.value)
})

const All = value => ({
  value,
  concat: y => All(value && y.value)
});

const allTest = All(true).concat(All(true)).concat(All(true));
const anyTest = Any(true).concat(Any(false)).concat(Any(false));

console.log("allTest ##", allTest)
console.log("anyTest ##", anyTest)
