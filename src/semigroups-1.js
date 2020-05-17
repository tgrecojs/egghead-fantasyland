import test from "riteway";
import { equals } from "ramda";

const Sum = value => ({
  value,
  concat: y => Sum(value + y.value)
});

const Product = value => ({
  value,
  concat: y => Product(value * y.value)
})

test("Product(10) Semigroup", async assert => {
  const result = Product(10).concat(Product(5)).concat(Product(2));
  assert({
    given: ".concat(Product(5)).concat(Product(2))",
    should: "return a value of 100",
    actual: equals(result.value, 100),
    expected: true
  });

  const first = Product(10).concat(Product(5)).concat(Product(2));
  const second = Product(10).concat(Product(5).concat(Product(2)));
  assert({
    given: ".concat(Product(5).concat(Product(2))",
    should: "return a value of 100 regardless of where the concattenation takes place",
    actual: equals(first.value, second.value),
    expected: true
  })
})
