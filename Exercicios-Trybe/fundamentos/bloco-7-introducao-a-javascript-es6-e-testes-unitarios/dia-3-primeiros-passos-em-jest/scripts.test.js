//EXERCICIO 1 --
// const sum = require('./scripts.js');
// describe('the function sum', () =>{
//     it('add 4+5 to equal 9', () => {
//         expect(sum(4,5)).toBe(9)
//     })
    
//     it('add 0+0 to equal 0', () => {
//         expect(sum(0,0)).toBe(0)
//     })
    
//     it('se a função sum retorna um erro quando os parametros não são todos numeros', () => {
//         expect(() => sum(4,'5')).toThrow();
//     });

//     it('se a função sum retorna a seguinte mensgem de erro "parameters must be numbers"', () => {
//         expect(() => sum(4,'5')).toThrow('parameters must be numbers');
//     });
// })

//------------------------------------------------------------------------------------
//EXERCICIO 2 --
// const myRemove = require('./scripts.js');

// describe('the function myRemove', () => {
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//         expect(() => myRemove([1, 2, 3, 4], 3).toBe([1, 2, 4]))
//     })
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
//         expect(() => myRemove([1, 2, 3, 4], 3).not([1, 2, 3, 4]))
//     })
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
//         expect(() => myRemove([1, 2, 3, 4], 5).toBe([1, 2, 3, 4]))
//     })
// })

//--------------------------------------------------------------------------------------------
//EXERCICIO 3
// const myFizzBuzz = require('./scripts.js');

// describe('the function myFizzBuzz', () => {
//     it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () =>{
//         expect(() => myFizzBuzz(15).toBe('fizzbuzz'))
//     })
//     it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () =>{
//         expect(() => myFizzBuzz(6).toBe('fizz'))
//     })
//     it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () =>{
//         expect(() => myFizzBuzz(10).toBe('buzz'))
//     })
//     it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () =>{
//         expect(() => myFizzBuzz(7).toBe(7))
//     })
//     it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () =>{
//         expect(() => myFizzBuzz('a').toBe(false))
//     })
// })

//---------------------------------------------------------------------------------------
//EXERCICIO 4