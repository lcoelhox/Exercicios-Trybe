const fetch = require('node-fetch');
// Nome da moeda (símbolo da moeda): valor em dólares.


const pickMoedas = async () => {
    const url = `https://api.coincap.io/v2/assets`;
    
    const moedas = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

    return moedas;
}


const listMoedas = async () => {
    const moedas = await pickMoedas()
    
    const lista = document.getElementById('listMoeda')

    moedas.forEach((moeda) => {
        const novaLista = document.createElement('li');
        const precoUSD = Number(moeda.priceUsd);

        novaLista.innerText = `${moeda.name} (${moeda.symbol}): ${precoUSD.toFixed(2)}`;

        lista.appendChild(novaLista);
    });
}

window.onload = () => listMoedas();
