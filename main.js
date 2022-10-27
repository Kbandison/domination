'use strict';

//Functions
let addStrikeThrough = () => {
  let item1 = document.querySelector('li');
  item1.style.textDecoration = 'line-through';
}

let setImage = (id, url) => {
  let image = document.querySelector(`#${id}`);
  image.src = url;
  image.style.height = '200px';
}

let removeLi = () => {
  let item1 = document.querySelector('li');
  item1.remove();
}

let fontId = (id, size) => {
  let font = document.querySelector(`${id}`);
  font.style.fontSize = `${size}px`;
}

let addElem = element => {
  let argument = document.querySelector('#arguments');
  argument.appendChild(element);
}

let newImage = document.createElement('img');
newImage.src = 'img/Tyrian.jpg';
newImage.style.height = '200px';

let resize = img => {
  img.style.height = '30px';
}

let img1 = document.querySelector('#image-3');

let invisible = element => {
  element.className = 'invisible';
}

let disappear = document.querySelector('p');

let newLi = str => {
  let item = document.createElement('li');
  item.innerHTML = str;
  return item;
}

let liStr = newLi('New List Item!');
things.appendChild(liStr);

let header = (hsize, str) => {
  let resize = document.createElement(`h${hsize}`);
  resize.innerText = str;
  return resize;
}

let newHeader = header(3, 'New Header!');
arguments.appendChild(newHeader);

/////////////////////////////////////////////////////////


//Calls
addStrikeThrough();
setImage('image-1', 'img/Sansa.jpg');
setImage('image-2', 'img/Jon.webp');
setImage('image-3', 'img/Daeneerys.webp');
removeLi();
removeLi();
fontId('h1', 50);
addElem(newImage);
resize(img1);
invisible(disappear);
