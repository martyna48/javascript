let paragraf1 = document.getElementById('par1');
let paragraf2 = document.getElementById('par2');


ustawTlo = () => {
    paragraf1.style.backgroundColor = 'red';
    paragraf2.style.backgroundColor = 'yellow';
}

document.querySelector('.button').onclick = ustawTlo;