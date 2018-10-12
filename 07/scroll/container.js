var $container = $('#container')

var checkScroll = () => {
    let scrollTop = $window.scrollTop();
    let 업버튼이보여질위치 = 200;

    if(scrollTop >= 업버튼이보여질위치) {
        $top.show('slow');
    } else {
        $top.hide('slow');
    }
}
var goTop = event => {
    // $window.scrollTop(0);
    $('html, body').animate({scrollTop: 0}, 400);
}

var $top = $('<div>')
.addClass('top')
.html('위로가세요')
.appendTo($container);
var $window = $(window);

$window.scroll(checkScroll);

$top.on('click', goTop);