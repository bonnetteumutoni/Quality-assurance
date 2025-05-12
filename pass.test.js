const { validPassword } = require('./pass');
test('password correct',()=>{
    expect(validPassword('123passw')).toBe(true);
});
test('password too short',()=>{
    expect(validPassword('123ghd')).toBe(false);
});
test('password no letter',()=>{
    expect(validPassword(1367631231)).toBe(false);
});
test('password no number',()=>{
    expect(validPassword("gdsfuifdab")).toBe(false);
});