  document.addEventListener("DOMContentLoaded", _ => {
    
    document.querySelector(".hamburguer-menu-icon").addEventListener("click", evt => {
        let navUl = document.querySelector("#navbar ul");
        let nav = document.querySelector("#navbar");
        if (navUl.style.display === "block") {
          navUl.style.display = "none";
          nav.style.position = "unset";
        } else {
          navUl.style.display = "block";
          nav.style.position = "fixed";
        }
    });
    
    // window.resizeEventTimeout = 0;
    function chooseIfCloseMenuForMobile() {
       let navUl = document.querySelector("#navbar ul");
         let nav = document.querySelector("#navbar");
      
        if (window.innerWidth >= 600) {
          navUl.style.display = "block";
          nav.style.position = "unset";
        } else {
          navUl.style.display = "none";
          nav.style.position = "unset";
        }
    }
    
    window.addEventListener("resize", _ => {
      
      // clearTimeout(resizeEventTimeout);
      
      // window.resizeEventTimeout = setTimeout(function() {
        chooseIfCloseMenuForMobile();
      // }, 250);
          
    });
    
    document.querySelectorAll(".nav-link").forEach(el => {
      el.addEventListener("click", chooseIfCloseMenuForMobile);
    });
    
  });
  