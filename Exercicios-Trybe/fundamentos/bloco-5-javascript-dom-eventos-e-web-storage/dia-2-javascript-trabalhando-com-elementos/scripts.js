let father = document.getElementById('pai');
let body = document.getElementById('body')
let h1 = document.createElement('h1');

father.appendChild(body);
function createElement(father);
function createElement(body);
body.appendChild(h1);
function createElement(h1);
h1.innerText = 'Exercicio 5.2';

let main = document.createElement('main');
body.appendChild(main);
main.className('main-content')
function createElement(main);


let sectionC = document.createElement('section');
main.appendChild(sectionC);
sectionC.className('center-conttent')
function createElement(sectionC);

let p = document.createElement('p');
sectionC.appendChild(p);
p.innerText = 'Esse é apenas um paragrafo de test, fique tranquilo e mantenha a tranquilidade'
function createElement(p);

let sectionL = document.createElement('section');
main.appendChild(sectionL);

let sectionR = document.createElement('section');
main.appendChild(sectionR);

let imagem = document.createElement('img');
sectionL.appendChild(imagem);
imagem.src('https://picsum.photos/200');
imagem.className('small.image');

