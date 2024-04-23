const primo = require('./primo.js');

test('é um numero primo', ()=>{
    expect(primo(7)).toBe(true);
});