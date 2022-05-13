let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for( let i = 0; i < numbers.length; i += 1){
  //  console.log(numbers[i]);
//}



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
 

// let maior = 0
// for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] > maior){
//         maior = numbers[index]
//     }
// }
// console.log(maior)


// let impar = 0
// for (let index = 0; index < numbers.length; index +=1){
//     if (numbers[index] % 2 !== 0){
//         impar += 1
//     }
// }
// console.log(impar)


let menor = 9999
for (let index = 0; index < numbers.length; index +=1){
    if (numbers[index] < menor){
        menor = numbers[index]
    }
}
console.log(menor)