$(function () {
    //第一个轮播
    var cur = 0;
    //右击
    $('.now-right').click(function () {
        cur++;
        if (cur == $('.img-blg').find('div').length) {
            cur = 1;
            $('.img-blg').css({left: 0}).stop().animate({left: -1200 * cur}, 500)
        } else {
            $('.img-blg').stop().animate({left: -1200 * cur}, 500)
        }

    });
    //左击
    $('.now-left').click(function () {
        cur--;
        if (cur == -1) {
            cur = $('.img-blg').find('div').length - 2;

            $('.img-blg').css({left: -1200 * (cur + 1)}).stop().animate({left: -1200 * cur}, 500)
        } else {
            $('.img-blg').stop().animate({left: -1200 * cur}, 500)
        }

    });
    //申明一个定时器
    var time;
    time = setInterval(function () {
        cur++;
        if (cur == $('.img-blg').find('div').length) {
            cur = 1;
            $('.img-blg').css({left: 0}).stop().animate({left: -1200 * cur}, 500)
        } else {
            $('.img-blg').stop().animate({left: -1200 * cur}, 500)
        }

    }, 2000);
    //鼠标移入清除定时
    $('.now').mouseover(function () {
        clearInterval(time);
    });
    //鼠标移出重启定时
    $('.now').mouseout(function () {
        time = setInterval(function () {
            cur++;
            if (cur == $('.img-blg').find('div').length) {
                cur = 1;
                $('.img-blg').css({left: 0}).stop().animate({left: -1200 * cur}, 500)
            } else {
                $('.img-blg').stop().animate({left: -1200 * cur}, 500)
            }

        }, 2000)
    });


//四个的轮播

//    克隆四个到末尾

    $('.store-ul').append($('.store-ul .store-li:lt(4)').clone(true));
//向右滚动
    var cut = 0;
    var len = $('.store-ul').find('.store-li').length;
    $('#btnRight').click(function () {
        cut++;
        if (cut == len - 3) {
            cut = 1;
            $('.store-ul').css({left: 0}).stop().animate({left: -303 * cut}, 500)
        } else {
            $('.store-ul').stop().animate({left: -303 * cut}, 500)
        }
    });

    //向左滚动
    $('#btnLeft').click(function () {
        cut--;
        if (cut == -1) {
            cut = len - 5;
            $('.store-ul').css({left: -303 * (len - 4)}).animate({left: -303 * cut}, 500)
        } else {
            $('.store-ul').stop().animate({left: -303 * cut}, 500)
        }
    });

//    弹出层

    $('.tan-p').hover(function () {
        $(this).stop().animate({top: 0})

    }, function () {
        $(this).stop().animate({top: 167})
    });
//    左右滑动

//向右滑动

    var cuu = 0;
    var lep = $('.exam-hua').find('.hua-one').length;
    $('.exam-right').click(function () {
        cuu++;
        if (cuu == lep) {
            cuu = 1;
            $('.exam-hua').css({left: 0}).stop().animate({left: -1100 * cuu}, 500)
        } else {
            $('.exam-hua').stop().animate({left: -1100 * cuu}, 500)
        }

    });


//    向左滑动

    $('.exam-left').click(function () {
        cuu--;
        if (cuu == -1) {
            cuu=lep-2;
            $('.exam-hua').css({left:-1100*(cuu+1)}).stop().animate({left: -1100 * cuu}, 500)
        }else {
            $('.exam-hua').stop().animate({left: -1100 * cuu}, 500)
        }

    });
//    自己动

    var time2;

    time2=setInterval(function () {

        cuu++;
        if (cuu == lep) {
            cuu = 1;
            $('.exam-hua').css({left: 0}).stop().animate({left: -1100 * cuu}, 500)
        } else {
            $('.exam-hua').stop().animate({left: -1100 * cuu}, 500)
        }

    },2000);

    // 清除定时器

    $('.exam').mouseover(function () {

        clearInterval(time2)
    });
    $('.exam').mouseout(function () {
        time2=setInterval(function () {

            cuu++;
            if (cuu == lep) {
                cuu = 1;
                $('.exam-hua').css({left: 0}).stop().animate({left: -1100 * cuu}, 500)
            } else {
                $('.exam-hua').stop().animate({left: -1100 * cuu}, 500)
            }

        },2000);
    })

});
