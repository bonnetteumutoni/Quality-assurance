
const { isValidAge } = require('./age');
test('',()=>{
    expect(isValidAge(17)).toBe(false);
    expect(isValidAge(18)).toBe(true);
    expect(isValidAge(19)).toBe(true);
    expect(isValidAge(59)).toBe(true);
    expect(isValidAge(60)).toBe(true);
    expect(isValidAge(61)).toBe(false);
    expect(isValidAge(92)).toBe(false);
});
