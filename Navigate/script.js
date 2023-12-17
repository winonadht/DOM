let olList = document.getElementById("list");
let lastElement = olList.lastElementChild;
olList.insertBefore(lastElement, olList.firstElementChild);


const section = document.querySelectorAll('section')
const section2 = section[1];
const section3 = section[2];

const h2section2 = section2.querySelector('h2');
const h2section3 = section3.querySelector('h2');

section2.insertBefore(h2section3, section2.firstChild);
section3.insertBefore(h2section2, section3.firstChild);

let element = document.querySelector(".section2");
element.remove();
