import standardDeviation from '..';

var data = [15, 13, 17, 7];
describe('standard deviation', () => {
    var s = standardDeviation(data);
    expect(standardDeviation(data, true)).toBe(s);
    expect(standardDeviation(data, false)).toBe(Math.sqrt(14));
});
