define(['jquery'],function($){
    function turnGreen(){
        $('.btn2').on('click',function(){
            $('.box').css('background-color','green')
        })
    }

    return turnGreen
})