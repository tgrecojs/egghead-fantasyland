import test from "riteway";

const trace = label => value => {
  console.log(`${label}::`, value);
  return value
};

const Product = value => ({
  value,
  concat: y => Product(value * y.value)
});
Product.empty = () => Product(1);

const Max = x => ({
  x,
  concat: y => Max(Math.max(x, y.x))
});

Max.empty = () => Max(-Infinity);

const Sum = x => ({
  x,
  concat: y => Sum(x + y.x)
});


Sum.empty = () => Sum(0);

const result = Product.empty().concat(Product(10))

// A friendly neighbourhood monoid fold.
// fold :: Monoid m => (a -> m) -> [a] -> m
const fold = M => data => data.reduce(
  (acc, x) => {
    console.log({ x, acc })
    return acc.concat(M(x))
  },
  M.empty())

// We can now use our monoids for (almost) all
// our array reduction needs!
const res = fold(Sum)([]) // 15

test('', async assert => {
  assert({
    given: '',
    should: '',
    actual: '',
    expected: ''
  })
})
test("Product(10).concat", async assert => {
  assert({
    given: "Product(5) & Product(2)",
    should: "return the same value regardless of how .concat is called",
    actual: result.value,
    expected: 3
  })
  assert({
    given: '',
    should: '',
    actual: '',
    expected: ''
  });
});
