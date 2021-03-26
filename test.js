const { soma, subtracao, multiplicacao, divisao } = require('./calculadora')


test('Soma', () => {
    expect(soma(1, 2)).toBe(3);
});

test('Subtração', () => {
    expect(subtracao(1, 2)).toBe(-1);
});

test('Multiplicação', () => {
    expect(multiplicacao(1, 2)).toBe(2);
});

test('Divisão', () => {
    expect(divisao(1, 2)).toBe(0.5);
});