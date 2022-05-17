
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// }

//MOSTRANDO BEM VINDA AO PERSONAGEM
//   console.log('Bem vinda ' + info.personagem)

// MOSTRANDO OAS CHAVES
// for (let index in info) {
//     console.log(index)
// }

// MOSTRANDO O CONTEUDO DAS CHAVES
// for (let index in info) {
//     console.log(info[index]);
// }

// MOSTRANDO OS VALORES DAS CHAVES INFO E INFO2 NA MESMA FRASE
// for (let index in info, info2) {
//     console.log(info[index] + ' e ' + info2[index])
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//         {
//             titulo: 'O Pior Dia de Todos',
//             autor: 'Daniela Kopsch',
//             editora: 'Tordesilhas',
//         },
//         {
//             titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//             autor: 'JK Rowling',
//             editora: 'Rocco',
//         }
//     ],
//   };

//MOSTRANDO O NOME, SOBRENOME, E O LIVRO FAVORITO, JUNTO COM STRINGS.  
//console.log('O livro favorito da ' + leitor.nome + ' ' + leitor.sobrenome + " Se chama " + leitor.livrosFavoritos + ' O Pior Dia de Todos');

// console.log(leitor.nome + ' tem 2 livros favoritos' )


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let num = [2, 6, 6, 6, 8, 2, 3]
let index = 0

function iRepet() {
    for( index = 0; index <= num; index += 1);
    if (num[index] === num[index]){
        index += 1
    }
}
iRepet();
console.log(num[index]);