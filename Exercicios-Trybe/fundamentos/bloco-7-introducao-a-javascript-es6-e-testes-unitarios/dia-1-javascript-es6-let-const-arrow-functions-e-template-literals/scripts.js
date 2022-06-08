// const testingScope = (escopo) => {
//     if (escopo === true) {
//       const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       //ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(`${elseScope}`);
//     }
//   }

//   testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort(function(a,b) {
//     if (a > b) return 1;
//     if (b > a) return -1;
//     return 0;
// });
// // Seu código aqui.

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

const fatorial = (number) => {
  for (let index = 0; index <= number; index += 1) {
    number * number[index];
    return fatorial(2);
  }
};
fatorial