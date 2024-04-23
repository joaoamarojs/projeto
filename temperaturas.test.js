const temperaturas = require('./temperaturas.js');

test('Temperatura convertida em graus Fahrenheit', ()=>{
    expect(temperaturas.fahrenheit(30.5)).toBe(86.9);
});

test('Temperatura convertida em graus Celsius', ()=>{
    expect(temperaturas.celsius(30.5)).toBe(-0.83);
});