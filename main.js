
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // nav toggle
        nav.classList.toggle('nav-active');
        //link animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
            }
        })
        //burger animation
        burger.classList.toggle('toggle');
    });
    nav.addEventListener('click', () => {
        // nav toggle
        nav.classList.toggle('nav-active');
        //link animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
            }
        })
        //burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

// Dark - Light mode


var checkbox = document.querySelector('.am');
console.log(checkbox)



// Transition animation
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

// Functions to enable and disable Dark Mode
const enableDarkMode = () => {
    trans()
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('darkMode', null);
};


// Toggle functionality
checkbox.addEventListener('click', () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        } else {
        disableDarkMode();
}})

