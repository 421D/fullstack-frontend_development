'use strict';
(function homePage($){


    var oCon = $('.content'),
        abtn = $('.content-abtn li'),
        aBanner = $('.content-banner'),
        oPrve = $('.abtn-prve'),
        oNext = $('.abtn-next'),
        that = 0;
    function addremove() {
        abtn.eq(that).addClass('active').siblings('li').removeClass('active');
        aBanner.eq(that).css('opacity','1').siblings('div').css('opacity','0');
    }


    function showhide() {
        abtn.bind('click',function () {
            that = abtn.index($(this));
            console.log(that);
            addremove();
        });
        oPrve.bind('click',function () {
            if(that==0){
                that = 3;
                addremove();
                return;
            }
            that--;
            addremove();
        });
        oNext.bind('click',function () {
            if(that == 3){
                that = 0;
                addremove();
                return
            }
            that++;
            addremove();
        });
    }



    // 使广告产生循环
    function next() {
        that = (that + 1) % abtn.length;
        abtn[that].click();
    }
    //
    var timer = setInterval(next, 3000);

    // 鼠标移动到广告上给左右按钮添加样式，并显示
    oCon.bind('mouseenter',function () {
        clearInterval(timer);
        oPrve.addClass('active');
        oNext.addClass('active');
    });

    oCon.bind('mouseleave',function () {
        timer = setInterval(next, 3000);
        oPrve.removeClass('active');
        oNext.removeClass('active');
    });
    showhide();
})(jQuery);
