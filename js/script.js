//SELECT
const container = document.querySelector("#container");

console.dir(container.firstElementChild);

const controls = document.querySelector('.controls');

console.dir(controls.previousElementSibling);   

const display = document.querySelector('.display');


//CREATE
const divA = document.createElement('divA');
const divB = document.createElement('divB');
const divC = document.createElement('divC');
const removed = document.createElement('bonk');

//ADD
container.appendChild(divA)

container.appendChild(divC)

container.insertBefore(divB, display) 

container.appendChild(removed);


//REMOVE
container.removeChild(removed);

//removeAttribute()



//ALTERING

divA.style.color = 'blue';

divB.style.cssText = 'color: blue; background-color : black;';

divC.setAttribute('style','color: blue; background-color : white'); 




// working with classes


divA.classList.add('new');

divA.classList.remove('new');

divA.classList.toggle('new');  // mostly best



// adding text content

divA.textContent = "divA TEXT";

// adding html content

divB.innerHTML = '<span>divB new span</span>';




//

const box = document.querySelector('#box');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'this is the box div';


box.appendChild(content);

//