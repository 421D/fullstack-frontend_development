
'use strict';
(function shopGo($){
    var   oBigImg = $('.shop-mainLeft').find('#bigImg'),
        alistImg = $('.mainLeft-selected img');

    function init() {

        var  aEdition = $('#phoneEditon').find('li'),
            aCombo = $('#phoneCombo').find('li'),
            aHuab = $('#phoneHuab').find('li'),
            aScreen = $('#phoneScreen').find('li');

        pullDown();
        cutImages();
        cutImgColor();
        cutImgSize();
        Actives(aEdition);
        Actives(aCombo);
        Actives(aHuab);
        Actives(aScreen);
    }

    /**
     * 用于控制页面下拉时，网页顶部出现导购信息
     * pullDown
     */
    function pullDown(){
        var aNav = document.querySelector('.nav-sub'),
            aHua = document.querySelector('.shop-nav-list');

        window.onscroll = function() {
            var t = document.documentElement.scrollTop || document.body.scrollTop, //页面被卷去的高度
                c = aNav.offsetHeight;
            if(t > c) {
                aHua.style.height = '60px';
                aHua.style.visibility = 'visible';

            } else {
                aHua.style.height = '0';
            }
        }
    }

    /**
     * 控制 分享 和 商品详情/规格参数  的显示和消失
     * cutImages
     */
    function cutImages() {

        var aBtn = $('.details-img li'),
            oParameter = $('.parameter-img'),
            oProduct = $('.product-detail-img'),
            oImg = $('.share-img'),
            oAllImg = $('.share-collecting');
        console.log(aBtn);
        oAllImg.mouseenter(function () {
            oImg.css('display','block');
        });
        oAllImg.mouseleave(function () {
            oImg.css('display','none')
        });

        aBtn.bind('click',function () {
            var that = aBtn.index($(this));
            aBtn.eq(that).addClass('active').siblings('li').removeClass('active');
            if(that === 0){
                oParameter.css('display','none');
                oProduct.css('display','block');
            }else if(that === 1){
                oParameter.css('display','block');
                oProduct.css('display','none');
            }
        })
    }

    /**
     * 单击手机颜色选择按钮，显示相对应的手机颜色图片
     * cutImgColor
     */

    function cutImgColor() {
        var data2 = data,
            oColor = $('#phoneColor').find('li');
        oColor.bind('click',function () {
            var that = oColor.index($(this));
            oColor.eq(that).addClass('active').siblings('li').removeClass('active');
            oBigImg.attr('src',data2[that][0].img);
            alistImg.each(function (j) {
                $(this).attr('src',data2[that][j].img);
            })
        });
    }

    /**
     * 大小展示图片切换
     * cutImgSize
     */
    function cutImgSize() {
        var alist = $('.mainLeft-selected li');
        alist.bind('click',function () {
            var that = alist.index($(this));
            alist.eq(that).addClass('active').siblings('li').removeClass('active');
            oBigImg.attr('src',alistImg[that].src);
        });
    }

    /**
     * 控制给选中框，加颜色
     * Actives(obj)
     */
    function Actives(obj) {
        var count = 0;
        for(var i=0;i<obj.length;i++){
            obj[i].index = i;
            if(obj.length>1){
                obj[i].onclick = function(){
                    $(this).addClass('active').siblings('li').removeClass('active');
                }
            }else{
                obj[i].onclick = function(){
                    count++;
                    if(count % 2 == 0){
                        $(this).addClass('active');
                    }else{
                        $(this).removeClass('active');
                    }
                }
            }
        }
    }

    init();
})(jQuery);






