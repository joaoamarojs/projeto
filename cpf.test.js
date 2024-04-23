const cpf = require('./cpf.js');

test('é um cpf valido', ()=>{
    expect(cpf("02400503001")).toBe(false);
});