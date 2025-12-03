'use strict';
(function loading($){

    function labelshowhide(){
        var aLabel = $('.lableItems label'),
            oEmail = $('#emailRegister'),
            oPhone = $('#phoneRegister');
        aLabel.bind('click',function () {
            var that = aLabel.index($(this));
            aLabel.eq(that).addClass('active').siblings('label').removeClass('active');
            if(that === 0){
                oEmail.css('display','block');
                oPhone.css('display','none');
            }
            if(that === 1){
                oEmail.css('display','none');
                oPhone.css('display','block');
            }

        });
    }

    labelshowhide();
})(jQuery);
