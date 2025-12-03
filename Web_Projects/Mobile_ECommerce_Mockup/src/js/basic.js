'use strict';
var  basic = (function(){
    var dropDown = null,
        dropItems = null,
        dropItem = null,
        foldButton = null,
        foldMenu =null,
        oHeight = 0,
        flag = false;
    function init(){
        dropDown = document.querySelector('.nav');
        dropItems = dropDown.querySelectorAll('.product');
        dropItem = document.querySelectorAll('.list');
        foldButton = document.getElementById('fold-Button');
        foldMenu = document.querySelector('.fold-menu');
        flag = false;

        flex(dropItems,dropItem);
        eleIsExist('.content');
        window.onresize = function(){
            eleIsExist('.content');
        };
        fold();
    }


    //顶部导航菜单的下拉效果
    function flex(Obj,subObj){
        for(var i = 0; i < Obj.length; i++) {
            Obj[i].index = i;
            Obj[i].onmouseenter = function() {
                subObj[this.index].style.height = '240px';
            };
            Obj[i].onmouseleave = function() {
                subObj[this.index].style.height = '0';
            }
        }
    }
    //配合响应式设计，在低分辨率下，把菜单折叠到顶部右侧
    function eleIsExist(eleClassName){

        if(document.querySelector(eleClassName) == null){
            oHeight = 250;
        }else{
            oHeight = document.querySelector(eleClassName).offsetHeight-10;
        }
    }
    function fold(){
        var obtn = dropDown.querySelector('.fold-b-h');

        MyAddEvent(obtn,'click',foldmethod);
    }
    function foldmethod(){
        if(!flag){
            if(document.body.classList){
                foldButton.classList.add('rotate');
                isflag();
            }else{
                addClass(foldButton,'rotate');
                isflag();
            }
        }else{
            if(document.body.classList){
                foldButton.classList.remove('rotate');
                isflag();
            }else{
                removeClass(foldButton,'rotate');
                isflag();
            }
        }
    }
    function isflag(){
        if(!flag){
            foldMenu.style.height = oHeight+'px';
            flag = true;
        }else{
            foldMenu.style.height = '0';
            flag = false;
        }
    }
    function MyAddEvent(obj,ev,fn){
        if(obj.attachEvent){
            obj.attachEvent('on'+ev,fn);
        }
        else{
            obj.addEventListener(ev,fn,false);
        }
    }
    //添加class样式
    function addClass(obj, cls){
        var obj_class = obj.className,
            blank = (obj_class != '') ? ' ' : '';
        obj.className = obj_class + blank + cls;
    }
    //删除class样式
    function removeClass(obj, cls){
        var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
        obj_class = obj_class.replace(/(\s+)/gi, ' ');//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
        var  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
        removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
        obj.className = removed;//替换原来的 class.
    }
    init();
})();
	

