import test from "riteway";

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

test('Max Monoid', async assert => {
  const testInput = 20;
  const result = Max(testInput);
  assert({
    given: 'right identity',
    should: 'retun its current value',
    actual: result.concat(Max.empty()).value === testInput,
    expected: true
  });

  assert({
    given: 'left identity',
    should: 'retun its current value',
    actual: Max.empty().concat(result).value === testInput,
    expected: true
  });
});

test('Min Monoid', async assert => {
  const testInput = 20;
  const result = Min(testInput);
  assert({
    given: 'right identity',
    should: 'retun its current value',
    actual: result.concat(Min.empty()).value === testInput,
    expected: true
  });

  assert({
    given: 'left identity',
    should: 'retun its current value',
    actual: Min.empty().concat(result).value === testInput,
    expected: true
  });
});

