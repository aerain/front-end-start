// document.querySelector('h1').innerHTML = 'hi';
// $('h1').fadeOut().delay(1000).fadeIn();

// var $div = $('div');

// $('div')
//     // .css('background-color', '#339955')
//     .css('border', '1px solid red');

// $('#box').addClass('red');
// $('#box').toggleClass('red');

var $btn = $('#btn');
var $txt = $('#txt');
var $debug = $('#box');
$debug.on('click', 'div', event=> {
    $(event.target).fadeOut();
    console.log(event.target);
});
$btn.on('click', event => {
    console.log('click');

    
    // $('h1').toggle('slow');
    // if($txt.val() === '') {
    //     alert('검색어를 입력하세요');
    //     return;
    // } 
    // $debug.html($txt.val());
});

