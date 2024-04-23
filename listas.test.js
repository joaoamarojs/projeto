const ordenarLista = require('./listas.js');

test('Lista ordem crescente', ()=>{
    expect(ordenarLista([3, 1, 5, 2, 4], 'crescente')).toEqual([1, 2, 3, 4, 5]);
});

test('Lista ordem decrescente', ()=>{
    expect(ordenarLista([9, 7, 8, 10, 6], 'decrescente')).toEqual([10, 9, 8, 7, 6]);
});