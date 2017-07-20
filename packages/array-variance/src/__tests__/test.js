import variance from '..';

var data = [15, 13, 17, 7];
test('variance', () => {
    var v = variance(data);
    expect(v).toBeCloseTo(18.667, 3);
    expect(variance(data, true)).toBe(v);
    expect(variance(data, false)).toBe(14);
});
