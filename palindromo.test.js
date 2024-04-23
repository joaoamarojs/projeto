const palindromo = require('./palindromo.js');

test('é um palindromo', ()=>{
    expect(palindromo("Girafarig")).toBe(true);
});