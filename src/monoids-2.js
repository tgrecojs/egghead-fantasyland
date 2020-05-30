/** Upgrading Semigroups to Monoids! */

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

console.log(
  Min(11).concat(Min(10).concat(Min(5))).concat(Min.empty()),
  Max(11).concat(Max(10).concat(Max(5))).concat(Max.empty())
)
