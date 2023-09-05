 
document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('.social a');
  
    socialLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const url = link.getAttribute('href');
        window.open(url, '_blank');
      });
    });
  });