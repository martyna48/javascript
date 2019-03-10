// $('#naglowek-1').hide(3000);
// $('#naglowek-1').show(3000);

// $('#naglowek-1').fadeOut(3000); //zmienia opacity
// $('#naglowek-1').fadeIn(3000);

// $('#naglowek-1').slideUp(3000);
// $('#naglowek-1').slideDown(3000);


let naglowek2 = $('#naglowek-2');

function customAnimate2() {
    console.log('Koniec I animacji! Za chwilę startuje druga :)');
    naglowek2.animate({
        fontSize: '2em', 
        marginLeft: '0px',
    
}, 2000, customAnimate1); //wywołuje następną funkcję
};

function customAnimate1() {
    console.log('Koniec II animacji! Za chwilę startuje druga :)');
    naglowek2.animate({
        fontSize: '4em', 
        marginLeft: '300px',
        
}, 2000, customAnimate2);
};

customAnimate1();
