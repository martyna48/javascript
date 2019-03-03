let header = document.querySelector('header');
// header.innerHTML = '<a href="a"> Nowy link w header </a>';

// console.log(header. innerHTML);


// header.lastElementChild.textContent += '!';

// console.log(header.lastElementChild.textContent);

// console.log(document.querySelector('.parSecond').outerHTML); // pokazuje strukturę z klasą

// console.log(document.querySelector('.parSecond').innerHTML); //bez klasy

let link = document.querySelector('.link.superlink');
link.classList.add('nowa-klasa');
link.classList.remove('nowa-klasa');
link.classList.toggle('nowa-klasa');


console.log(link.classList);