const calculadora = require('./calculadora.js');

test('a soma está correta', ()=>{
    expect(calculadora.adicao(1,2)).toBe(3);
});

test('a subtração está correta', ()=>{
    expect(calculadora.subtracao(5,3)).toBe(2);
});

test('a multiplicação está correta', ()=>{
    expect(calculadora.multiplicacao(1,2)).toBe(3);
});

test('a divisão está correta', ()=>{
    expect(calculadora.divisao(1,2)).toBe(3);
});