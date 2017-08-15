    function tabs(){
      var tabs = document.querySelectorAll('.tab-nav>li');
      var content = document.querySelectorAll('.tab-content>li');
      tabs.forEach(function (tab) {
        tab.addEventListener('click',function () {
          tabs.forEach(function (node) {
            node.classList.remove('active');
          })
          this.classList.add('active');
          var index = [].indexOf.call(tabs,this);
          content.forEach(function (node) {
            node.classList.remove('active');
          })
          content[index].classList.add('active');
        })
      })        
    }

    tabs()