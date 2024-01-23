document.addEventListener('DOMContentLoaded', () => {
   const header = document.querySelector('header');
   let scrollTimeout;
 
   const handleScroll = () => {
     if (window.scrollY > 50) {
       header.classList.add('scrolled');
     } else {
       header.classList.remove('scrolled');
     }
     scrollTimeout = null;
   };
 
   window.addEventListener('scroll', () => {
     if (scrollTimeout) clearTimeout(scrollTimeout);
     scrollTimeout = requestAnimationFrame(handleScroll);
   });
 });