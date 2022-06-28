// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...elementos) => {
    return elementos.reduce((acumulador, soma) => acumulador + soma);
}
console.log(sum([1, 2, 3, 4], [20, 50]));