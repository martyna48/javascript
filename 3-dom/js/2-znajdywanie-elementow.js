let element;

element = document.getElementById('parFirst'); // po id
element = document.getElementsByClassName('link')//.length; // po class
element = document.getElementsByTagName('p')[0]; // po tagu

element = document.querySelector('#sectionFirst .parSecond .par2'); // po querySelector
element = document.querySelectorAll('#sectionFirst a')[2].innerHTML; // po querySelectorAll

element = document.getElementById('main-header').parentElement; // klucz, rodzic
element = document.getElementById('main-header').parentElement.children;

element = document.querySelector('header').firstElementChild;
element = document.querySelector('header').lastElementChild;

console.log(element);