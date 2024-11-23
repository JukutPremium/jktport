window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('preloader-active');
    
    gsap.to('.loading-text', { opacity: 1, duration: 1, delay: 0.5 });
  
    gsap.to('.preloader', {
      opacity: 0,
      duration: 1.5,
      delay: 3,
      onComplete: () => {
        document.querySelector('.preloader').style.display = 'none';
        document.body.classList.remove('preloader-active');
      },
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
      var welcomeTyped = new Typed("#contact", {
        strings: ['Contact.'],
        typeSpeed: 150,
        backSpeed: 150,
        showCursor: false,
        loop: false,
      });
    });
    
  document.addEventListener('DOMContentLoaded', function () {
      var welcomeTyped = new Typed("#welcome", {
        strings: ['Welcome.'],
        typeSpeed: 150,
        backSpeed: 150,
        showCursor: false,
        loop: false,
      });
    });