$(document).ready(function(){
    // //slide
    // $('body').addClass('cccc')
    // //요소검사 -body태그 클래스 확인해보기
    // setInterval = 특정시간단위로 주기적으로 처리
    // setTimeout = 특정시간이 흐르고 한번 실행

    // var count = 0;
    // setInterval(function(){
    //     count++;
    //     count %= 3;
    //     $('.aniSlide').animate({
    //         "marginLeft" : -1200 * count
    //     }, 400, function(){})
    // } , 3000)
    // })

    setInterval(function(){
        $('.aniSlide').animate({
            "marginLeft" : "-=1200"
        },400,function(){
            $('.aniSlide > div').eq(0).appendTo($(this))
            $(this).css('margin-Left',0)
        })
        }, 3000)
    })