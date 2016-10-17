/**
 * Created by Administrator on 2016/10/7.
 */

// 向右滚动
var cur = 0;
var allli = $('indexBanner').getElementsByTagName('li');

// 克隆
for (var i = 0; i < 3; i++) {
    $('indexBanner').appendChild(allli[i].cloneNode(true))
}
var len = allli.length;

$('btnRight').onclick = function () {
    cur++;
    if (cur == len - 2) {
        cur = 1;
        $('indexBanner').style.left = 0;
    }
    animate($('indexBanner'), {left: -406 * cur});
};


// 向左滚动
$('btnLeft').onclick = function () {
    cur--;
    if (cur == -1) {
        cur = len - 4;
        $('indexBanner').style.left = -406 * (len - 3) + 'px';
    }
    animate($('indexBanner'), {left: -406 * cur});
};


// 第二个轮播
var pi = document.getElementById('P1');
var topLi = $('toop').getElementsByTagName('li');
var cut = 0;
var lan = topLi.length;
// 向右
$('picRight').onclick = function () {
    cut++;
    if (cut == lan) {
        cut = 1;
        $('toop').style.left = 0;
        $('P1').style.top = 0;
    }
    animate($('toop'), {left: -880 * cut});
    animate($('P1'), {top: -113 * cut})

};
// 向左
$('picLeft').onclick = function () {
    cut--;
    if (cut == -1) {
        cut = lan - 2;
        $('toop').style.left = -(lan - 1) * 880 + 'px';
        $('P1').style.top = -(lan - 1) * 113 + 'px';
    }
    animate($('toop'), {left: -880 * cut});
    animate($('P1'), {top: -113 * cut})

};

// 自己动

var time1;
time1 = setInterval(function () {

    cut++;
    if (cut == lan) {
        cut = 1;
        $('toop').style.left = 0;
        $('P1').style.top = 0;
    }
    animate($('toop'), {left: -880 * cut});
    animate($('P1'), {top: -113 * cut})

}, 3000);

document.getElementById('topic').onmouseover = function () {
    clearInterval(time1)
};
document.getElementById('topic').onmouseout = function () {
    time1 = setInterval(function () {

        cut++;
        if (cut == lan) {
            cut = 1;
            $('toop').style.left = 0;
            $('P1').style.top = 0;
        }
        animate($('toop'), {left: -880 * cut});
        animate($('P1'), {top: -113 * cut})

    }, 3000);
};


// 第三个轮播

var en = $('env1').getElementsByTagName('a');
var le = en.length;
var cuy = 0;

// 向右
$('bot2').onclick = function () {
    cuy++;
    if (cuy == le) {
        cuy = 1;
        $('env1').style.left = 0;
    }
    animate($('env1'), {left: -880 * cuy});
};


// 向左
$('bot1').onclick = function () {
    cuy--;
    if (cuy == -1) {
        cuy = le - 2;
        $('env1').style.left = -(le - 1) * 880 + 'px';
    }
    animate($('env1'), {left: -880 * cuy});
};

// 定时器

var timer2;

timer2 = setInterval(function () {
    cuy++;
    if (cuy == le) {
        cuy = 1;
        $('env1').style.left = 0;
    }
    animate($('env1'), {left: -880 * cuy});
}, 3000);


document.getElementById('env').onmouseover = function () {
    clearInterval(timer2)
};
document.getElementById('env').onmouseout = function () {
    timer2 = setInterval(function () {
        cuy++;
        if (cuy == le) {
            cuy = 1;
            $('env1').style.left = 0;
        }
        animate($('env1'), {left: -880 * cuy});
    }, 3000);

};
document.getElementById('bot1').onmouseover = function () {
    clearInterval(timer2)
};
document.getElementById('bot1').onmouseout = function () {
    timer2 = setInterval(function () {
        cuy++;
        if (cuy == le) {
            cuy = 1;
            $('env1').style.left = 0;
        }
        animate($('env1'), {left: -880 * cuy});
    }, 3000);

};
document.getElementById('bot2').onmouseover = function () {
    clearInterval(timer2)
};
document.getElementById('bot2').onmouseout = function () {
    timer2 = setInterval(function () {
        cuy++;
        if (cuy == le) {
            cuy = 1;
            $('env1').style.left = 0;
        }
        animate($('env1'), {left: -880 * cuy});
    }, 3000);

};