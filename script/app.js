const navSlide = () => {
    const navMenu = document.querySelector('.navMenu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    navMenu.addEventListener('click',()=> {
        // Alternar Menu
        nav.classList.toggle('nav-active');

            //Link com animação
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animação do menu
        navMenu.classList.toggle('toggle');

    });
}

navSlide();