define(['jquery'],function($){
    function turnYellow(){
        $('.btn3').on('click',function(){
            $('.box').css('background-color','yellow')
        })
    }

    return turnYellow
})