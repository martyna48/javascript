$ (function() {
    // let paragrafy = $('p');

    // paragrafy.text('Nowy tekst!');
    // console.log(paragrafy.text());
    // $('span').html('<a href="#">Teraz link</a>'); //utowrzyl sie nowy element - HTML, innerHTML i outerHTML w jednym

    // $('span').prepend('Prependujemy tekst !');
    // $('span').append('Appendujemy tekst !');

    // $('span').before('<p> Beforujemy tekst ! </p>');
    // $('span').after('<p> Afterujemy tekst ! </p>');

    // $('#naglowek-1').empty(); //brak w inspektorze
    // $('#naglowek-1').remove(); //naglowek znika ze strony

    // $('#naglowek-1').css('background-color', 'yellow');
    // $('#naglowek-1').css({color: 'red', 'text-dekoration' : 'underline'});

    // $('input#input-value').val('Tadaam!');

    // $('#par-container').find('.paragraf').css('background-color', 'red');

    $('p').each(function(index, element) {
        console.log($(this));
        console.log('Element ' + index + ':' + $(element).text());
    });

});