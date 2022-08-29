const p = document.createElement('p');

p.style.color = 'red';
p.textContent = "Hey I'm red!";

const h3 = document.createElement('h3');

h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

const divAdd = document.createElement('div');
const h1Add = document.createElement('h1');
h1Add.textContent = "I'm in a div";
const pAdd = document.createElement('p');
pAdd.textContent = "ME TOO!";
divAdd.append(h1Add);
divAdd.append(pAdd);

const div = document.querySelector('#container');

div.append(p);
div.append(h3);
div.append(divAdd);

