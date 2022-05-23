let father = document.getElementById('pai');
let body = document.getElementById('body');

let h1 = document.createElement('h1');
body.appendChild(h1);
h1.innerText = 'Exercicio 5.2 - JavaScript DOM';

let main = document.createElement('main');
body.appendChild(main);
main.className = 'main-content';

let sectionC = document.createElement('section');
main.appendChild(sectionC);
sectionC.className = 'center-conttent';

let p = document.createElement('p');
sectionC.appendChild(p);
p.innerText = 'Esse é apenas um paragrafo de teste, fique tranquilo e mantenha a tranquilidade';

let sectionL = document.createElement('section');
main.appendChild(sectionL);

let sectionR = document.createElement('section');
main.appendChild(sectionR);

let imagem = document.createElement('img');
sectionL.appendChild(imagem);
imagem.src('https://picsum.photos/200');
imagem.className = 'small.image';

let ul1 = Document.createElement('ul');
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( index = 0; index < lista.length;index += 1) {
    let listaN = lista[index];
    ul1.innerText = lista
    ul1.appendChild(listaN) 
}
sectionR.appendChild(ul1);