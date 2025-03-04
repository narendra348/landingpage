
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
      
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.toggle('show');
          
            event.stopPropagation();
        });
    });

 
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            const openMenus = document.querySelectorAll('.dropdown-menu');
            openMenus.forEach(menu => menu.classList.remove('show'));
        }
    });
});
