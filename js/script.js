
// Arrow scroll function

$(document).ready(function() {
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
  
      let target = this.hash;
      let $target = $(target);
  
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;

      });
      let name = document.getElementById("name-nav");
      name.classList.add("name-pulse");
      console.log("function called");
    });
  });
  
  function addPulseOnScroll(id, className) {
    window.addEventListener('scroll', function() {
      let ele = document.getElementById(id);
      if (window.scrollY > 0) {
        ele.classList.add(className);
      } else {
        ele.classList.remove(className);
      }
    });
  }
  
  addPulseOnScroll("name-nav", "name-pulse");