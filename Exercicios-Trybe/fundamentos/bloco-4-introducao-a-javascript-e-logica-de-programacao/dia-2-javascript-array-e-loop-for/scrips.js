//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//MOSTRANDO OS NUMEROS
//for( let i = 0; i < numbers.length; i += 1){
  //  console.log(numbers[i]);
//}

//SOMANDO OS NUMEROS DO ARRAY
// let soma = 0
// for (let index = 0; index < numbers.length; index += 1){
//       soma += numbers[index]
//       //console.log(soma)



// MEDIA
// let media = 0
// let soma = 0
// for (let index = 0; index < numbers.length; index += 1){
//       soma += numbers[index]
//       //console.log(soma)
//       media  = soma / 10
//       console.log(media)
//       if (media >= 20){
//           console.log('Valor maior que 20');
//       } 
//       else if (media < 20){
//           console.log('valor menor que 20')
//       }
//  }    
 
// MOSTRANDO O MAIOR NUMERO
// let maior = 0
// for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] > maior){
//         maior = numbers[index]
//     }
// }
// console.log(maior)

// MOSTRANDO NUMERO IMPAR
// let impar = 0
// for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] % 2 !== 0){
//         impar += 1
//     }
// }
// console.log(impar)

//MOSTRANDO NUMERO MENOR
// let menor = 9999
// for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] < menor){
//         menor = numbers[index]
//     }
// }
// console.log(menor)

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// for (index = 0; index < numeros.length; index += 1){
//     console.log(numeros[index])
// }

//DIVIDINDO OS VALORES DO ARRAY POR 2
let div = 0
for (index = 0; index < numeros.length; index += 1){
  div = numeros[index] / 2
  console.log(div)
}
