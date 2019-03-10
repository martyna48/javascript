$('#naglowek-1').on({
    'click': function() {
        $(this).css('color', 'blue');
    },
    'mouseenter': function () {
        $(this).css('background-color', 'red');
    },
    'mouseleave': function () {
        $(this).css('background-color', 'inherit');
    }
});