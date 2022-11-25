// 手机侧边栏默认不展开
var mobile_sidebar_menus = document.getElementById("sidebar-menus");
var menus_item_group = mobile_sidebar_menus.getElementsByClassName("group");

for (var i = 0; i < menus_item_group.length; i++) {
    menus_item_group[i].className = "site-page group hide";
}

var footerWrap = document.getElementById("footer-wrap");
// 移除底部框架信息
var frameworkInfo = document.getElementsByClassName("framework-info")[0];
footerWrap.removeChild(frameworkInfo);

// 增加建站时间
$("<span id='sitetime'></span>").appendTo(footerWrap);
siteTime();

//只在桌面版网页启用特效 
// var windowWidth = $(window).width();
// if (windowWidth > 768) {
//     document.write('<script type="text/javascript" src="/js/qanx_sakura.js"></script>');
// }

/* 鼠标点击文字特效 */
var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("❤富强", "❤民主", "❤文明", "❤和谐", "❤自由", "❤平等", "❤公正", "❤法治", "❤爱国", "❤敬业", "❤诚信", "❤友善");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX, y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        });
        $("body").append($i);
        $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function () {
            $i.remove();
        });
    });
});

// 背景雪花飘落特效
(function ($) {
    $.fn.snow = function (options) {
        var $flake = $('<div id="snowbox" />').css({ 'position': 'absolute', 'z-index': '9999', 'top': '-50px' }).html('&#10052;'),
            documentHeight = $(document).height(),
            documentWidth = $(document).width(),
            defaults = {
                minSize: 10, maxSize: 20, newOn: 1000,
                flakeColor: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
            },
            options = $.extend({}, defaults, options);
        var interval = setInterval(function () {
            var startPositionLeft = Math.random() * documentWidth - 100,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = documentHeight - 200,
                endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                durationFall = documentHeight * 10 + Math.random() * 5000;
            $flake.clone().appendTo('body').css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                color: options.flakeColor
            }).animate({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.2
            }, durationFall, 'linear', function () {
                $(this).remove()
            });
        }, options.newOn);
    };
})(jQuery);
$(function () {
    $.fn.snow({
        minSize: 5, /* 定义雪花最小尺寸 */
        maxSize: 50,/* 定义雪花最大尺寸 */
        newOn: 300  /* 定义密集程度，数字越小越密集 */
    });
});

function siteTime () {
    window.setTimeout("siteTime()", 1000);
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var t1 = Date.UTC(2022, 11, 22, 00, 00, 00);  // 建站时间
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
    var sitetimeInnerHtml = `${diffDays} 天 ${diffHours} 小时 ${diffMinutes} 分钟 ${diffSeconds} 秒`;
    if (diffYears > 0) {
        sitetimeInnerHtml = `${diffYears} 年` + sitetimeInnerHtml;
    }
    document.getElementById("sitetime").innerHTML = `本站已运行 ${sitetimeInnerHtml}`;
}
