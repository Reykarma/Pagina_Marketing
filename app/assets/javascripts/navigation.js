window.addEventListener('load', function() {
  let banner = document.getElementById('main_banner')
  let main_nav = document.getElementById('main_nav')
  

  function floating_menu(){
    let scroll_window = window.scrollY
    
    if(scroll_window > banner.scrollHeight){
      main_nav.classList.add('fixed-top')
      main_nav.classList.add('shadow')
    }else if(scroll_window < banner.scrollHeight){
      main_nav.classList.remove('fixed-top')
      main_nav.classList.remove('shadow')
    }
  }


  window.addEventListener('scroll', function(){
    floating_menu()
  })
})