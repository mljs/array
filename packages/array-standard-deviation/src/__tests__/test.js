import standardDeviation from '..';

var data = [15, 13, 17, 7];
test('standard deviation', () => {
  var s = standardDeviation(data);
  expect(s).toBeCloseTo(Math.sqrt(18.667), 3);
  expect(standardDeviation(data, { unbiased: true })).toBe(s);
  expect(standardDeviation(data, { unbiased: false })).toBe(Math.sqrt(14));
});
