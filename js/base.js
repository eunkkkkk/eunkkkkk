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

    setInterval(aniSlide, 3000)

     function aniSlide(){
        $('.aniSlide').animate({
            "marginLeft" : "-=1200"
        }, 400, function(){
            $('.aniSlide > div').eq(0).appendTo($('.aniSlide'))
            $('.aniSlide').css('marginLeft',0)
        })
    }

})