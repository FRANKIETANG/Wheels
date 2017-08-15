define(['jquery','com/carousel','com/gotop','com/mod','com/tab','com/waterfall'],function($,slide,gotop1,mods,tabs,water){
    slide.init($('.slide-box'))
    gotop1()
    mods()
    tabs()
    water()
})