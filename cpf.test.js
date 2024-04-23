const cpf = require('./cpf.js');

test('não é um cpf valido', ()=>{
    expect(cpf("02400503001")).toBe(false);
});