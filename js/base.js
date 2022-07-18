//옆으로 순환되며 슬라이드
// $(document).ready(function(){
//     setInterval(function(){
//         $('.aniSlide').animate({
//             "marginLeft" : "-=1200"
//         }, 400, function(){
//             $('.aniSlide > div').eq(0).appendTo($('.anislide'))
//             $('aniSlide').css('marginLeft',0)
//         })
//     }, 3000)
// })
$(document).ready(function(){
    var targetdiv = 0;
    setInterval(function(){
        targetdiv++;
        targetdiv %= 3;
        $('.aniSlide > div').eq(targetdiv).addClass('on').siblings().removeClass('on')
    }, 3000)
})
