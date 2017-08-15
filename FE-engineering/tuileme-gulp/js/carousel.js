    var slide = (function(){
        function _Slide(node){
            this.slideBox = node
            this.prev = this.slideBox.find('.prev')
            this.next = this.slideBox.find('.next')
            this.slideUl = this.slideBox.find('.slide-ul')
            this.slideLi = this.slideUl.find('li')
            this.sliderIndicator = this.slideBox.find('.slider-indicator')
            this.pageIndex = 0
            this.slideAuto = null
            this.isAnimate = false
            this.pageIndocator = '' 
            this.init()
            this.bindEvent()
            this.autoRun()           
        }

        _Slide.prototype.init = function(){
            this.slideLi.css({width: $(window).width()})//new
            for (var i=0;i<this.slideLi.length;i++){
                if(i<1){
                    this.pageIndocator += '<i class="active"></i>'
                }else{
                    this.pageIndocator += '<i></i>'
                }
            }
            this.sliderIndicator.append(this.pageIndocator)
            this.imgLength = this.slideUl.children().length
            this.cloneLi()
            this.resetWidth()
        }
        _Slide.prototype.cloneLi = function(){
            this.lastLi = this.slideUl.find('li').last()
            this.firstLi = this.slideUl.find('li').first()
            this.slideUl.prepend(this.lastLi.clone())
            this.slideUl.append(this.firstLi.clone())
        }
        _Slide.prototype.resetWidth = function(){
            this.windowWidth = $(window).width()//new
            this.countLength = this.slideUl.children().length
            this.slideLiWidth = this.windowWidth//new
            this.boxWidth = parseInt(this.countLength * this.slideLiWidth)
            this.slideUl.css({left: -this.slideBox.width(), width: this.boxWidth})
        }
        _Slide.prototype.bindEvent = function(){
            var _this = this
            this.len = 1
            this.slideBox.on('mouseenter',function(){
                _this.slideBox.find('.arrow-btn').show()
                clearInterval(_this.slideAuto)
            })
            this.slideBox.on('mouseleave',function(){
                _this.slideBox.find('.arrow-btn').hide()
                _this.autoRun()
            })
            this.sliderIndicator.on('click', 'i', function(){
                var index = $(this).index()
                $(this).addClass('active').siblings().removeClass('active')
                if(_this.pageIndex>index){
                    _this.prevPage(_this.pageIndex - index)
                }else{
                    _this.nextPage(index - _this.pageIndex)
                }
            })
            this.prev.on('click',function(){
                _this.prevPage(_this.len)
            })
            this.next.on('click',function(){
                _this.nextPage(_this.len)
            })            
        }
        _Slide.prototype.prevPage = function(len){
            var _this = this
            if(_this.isAnimate){return}
            _this.isAnimate = true
            _this.pageIndex -= len
            _this.slideUl.animate({left: '+='+len*_this.slideLiWidth},function(){
                if(_this.pageIndex<0){
                    _this.pageIndex = _this.imgLength-1
                    _this.slideUl.css({left: -_this.slideLiWidth*_this.imgLength})
                }
                _this.isAnimate = false
                _this.slidePage(_this.pageIndex)
            }) 
        }
        _Slide.prototype.nextPage = function(len){
            var _this = this
            if(_this.isAnimate){return}
            _this.isAnimate = true
            _this.pageIndex += len
            _this.slideUl.animate({left: '-='+len*_this.slideLiWidth},function(){
                if(_this.pageIndex>_this.imgLength-1){
                    _this.pageIndex = 0
                    _this.slideUl.css({left: -_this.slideLiWidth})
                }
                _this.isAnimate = false
                _this.slidePage(_this.pageIndex)
            })  
        }
        _Slide.prototype.slidePage = function(){
            this.sliderIndicator.find('i').removeClass('active').eq(this.pageIndex).addClass('active')            
        }
        _Slide.prototype.autoRun = function(){
            var _this = this
            _this.slideAuto = setInterval(function(){
                _this.nextPage(_this.len)
            },3000)
        }
        return {
            init: function(ct){
                ct.each(function(index,el){
                    new _Slide($(el))
                })
            }
        }
    })()
    
    slide.init($('.slide-box'))