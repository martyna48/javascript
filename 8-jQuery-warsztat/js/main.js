let slideShow = $('.slide-show');   //kontener
let singleSlide = $('.single-slide');  //pojedynczyslajd
let prevSlide = $('.prev-slide'); //przycisk
let nextSlide = $('.next-slide');  //przycisk
let SlideShowWidth = singleSlide.length * 100 + '%'; //szerokość danego kontenera
let proportionSlide = 100 / singleSlide.length; //
let globalCounter = 0;


//ustawiamy szerokosc dla całego kontenera z obrazkami
slideShow.css('width', SlideShowWidth); //400%

//ustawiamy szerokość dla poszczególnego obrazka
singleSlide.css('width', proportionSlide + '%'); //skupiamy się na dziecku, dynamicznie przypisujemy wartość;

//ustawiamy margines dla obrazków
singleSlide.each(function(index, element) {
   $(element).css({'margin-left': index * proportionSlide + '%'});
});


//dodanie zdarzeń dla przycisków
prevSlide.click(function() {
    slide(globalCounter - 1); //przeswanie w prawo
});
nextSlide.click(function() {
    slide(globalCounter + 1); //przesuwanie w lewo
});

function slide(counter) { //funkcja główna - njapierw wskakuje -1 czyli true, potem 1
    if (counter < 0 || counter >= singleSlide.length) {
    return;
}

//pobieramy i ukrywamy na przesunięciu bieżący napis
let slideCaption = slideShow.find('.slide-caption').eq(counter); //eq - metoda jQuery, kwadratowe nawiasy do czystego JS
    slideCaption.fadeOut();

let marginLeft = (counter * (-100)) + '%';

slideShow.animate({marginLeft: marginLeft}, 1000, function() { //slideShow - nie przesuwamy dzieci tylko 
    slideCaption.fadeIn();
    globalCounter = counter;

});

}