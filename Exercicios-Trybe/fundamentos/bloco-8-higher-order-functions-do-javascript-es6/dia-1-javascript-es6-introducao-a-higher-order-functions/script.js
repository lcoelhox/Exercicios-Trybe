//EXERCICIO 1
const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const criaEmail = (nomeCompleto) => {
    const contratado = nomeCompleto;
    const email = nomeCompleto.replace(' ', '_');
    const emailMinusculo = email.toLowerCase();
    const objeto = {Nome: contratado, Email: `${emailMinusculo}@trybe.com`}
    return objeto;
}

console.log(newEmployees(criaEmail));
//////-------------------------------------------------------------------------
//EXERCICIO 2
const numberSorted = (Math.random() * 5)

const sorteio = (apostado, func) => {
}; 

const func = () => {
    if (numberSorted === apostado){
        console.log('Parabéns você ganhou!');
    }
    else {
        console.log('Tente novamente');
    }
}
console.log(numberSorted);