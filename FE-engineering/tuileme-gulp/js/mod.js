    function mods(){
      var btnModal = document.querySelector('.btn-modal')
      var madalLayer = document.querySelector('.madal-layer')
      var closeBtn = document.querySelector('.close-btn')
      var mod = document.querySelector('.mod')
      btnModal.addEventListener('click', function() {
        madalLayer.style.display = 'block'
      })
      closeBtn.addEventListener('click', function() {
        this.style.display = 'none'
      })
      mod.addEventListener('click',function(e) {
        e.stopPropagation()
        if (e.target.classList.contains('close-btn')) {
          closeBtn.style.display = 'none'
        }
      })        
    }

    mods()