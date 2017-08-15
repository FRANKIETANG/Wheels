define(['jquery'],function($){
    function gotop1(){
              var GoTop = function(ct){
        this.ct = ct;
        this.target = $('<a class="btn">GoTop</a>')
        this.target.css({
          position:'fixed',
          right:'100px',
          bottom:'100px',
          display:'inline-block',
          padding:'8px 10px',
          'text-decoration':'none',
          color:'#000',
          'border-radius':'3px',
          cursor:'pointer',
          transition:'all .3s',
          'background-color':'#ff9800',
          color:'#fff'
        })
      }
      GoTop.prototype.createNode = function(){
        this.ct.append(this.target)
        this.target.hide()
      }
      GoTop.prototype.bindEvent = function(){
        var btn = this
        $(window).on('scroll',function(e){
          if($(window).scrollTop()<100){
            btn.target.hide()
          }else{
            btn.target.show()
          }
        })
        btn.target.on('click',function(){
            $(window).scrollTop(0)
        })
      }
      var GoTop1 = new GoTop($('.ct'))
      GoTop1.createNode()
      GoTop1.bindEvent() 
    }

    return gotop1
})