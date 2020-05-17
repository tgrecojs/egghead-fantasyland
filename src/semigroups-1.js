import test from "riteway";
import { equals } from "ramda"
const Sum = value => ({
  value,
  concat: y => Sum(value + y.value)
});

test('Sum(10)', async assert => {
  const given = '.concat(Sum(20))';

  assert({
    given,
    should: 'return an object with a value of 30.',
    actual: Sum(10).concat(Sum(20)).value,
    expected: 30
  });

  const first = Sum(10).concat(Sum(20).concat(Sum(15)));
  const second = Sum(10).concat(Sum(20)).concat(Sum(15));
  assert({
    given: ".concat(Sum(20).concat(Sum(15)))",
    should: 'be associative.',
    actual: equals(first.value, second.value),
    expected: true
  });
});
