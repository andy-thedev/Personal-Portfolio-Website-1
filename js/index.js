const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

/*when navigation is clicked, prompts nav-open function in style.css*/
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

/*when a navigation link is clicked on in the navigation menu/page, it should disappear, as it takes us to the part of the main page selected*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

