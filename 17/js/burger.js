document.addEventListener('DOMContentLoaded', function() {
 
  // burger
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    }) 
  })

  $(document).ready(function() {
    $('#burger').click(function() {
      $(this).toggleClass('open');
    })
  })
})