var $container = $('#container')

var $top = $('<div>')
.addClass('top')
.html('위로가세요')
.appendTo($container);

$(window).scroll(() => {
    let y = window.pageYOffset;
    if(y >= 200) {
        $top.show('slow');
    } else {
        $top.hide('slow');
    }
})

$top.on('click', event => {
    window.scrollTo(0, 0);
})