const primo = require('./primo.js');

test('é um numero primo', ()=>{
    expect(primo(7)).toBe(true);
});

test('não é um numero primo', ()=>{
    expect(primo(8)).toBe(false);
});