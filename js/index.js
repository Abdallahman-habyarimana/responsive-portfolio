// Navigation

const openNav = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav-menu');
const navList = document.querySelector('.nav__list');

// Open and Close Navbar
openNav.addEventListener('click', ()=> {
    const listHeight = navList.getBoundingClientRect().height;
    const containerHeight = navContainer.getBoundingClientRect().height;

    if(containerHeight === 0){
        navContainer.style.height = `${listHeight}px`
    } else {
        navContainer.style.height = `0px`
    }
})

jQuery(document).ready(function() {
    "use strict";
    $(".header").ripples({
        dropRadius: 12,
        perturbance: 0.01,
    })
})

// fix navigation
const navBar = document.querySelector('.nav');

window.addEventListener('scroll', ()=> {
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > navHeight) {
        navBar.classList.add("fix-nav")
    } else {
        navBar.classList.remove("fix-nav")
    }
})

// smooth Scroll
const links = document.querySelectorAll(".scroll-link");
const linksContainer = document.querySelector(".nav__list");

links.forEach( link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        // Scroll to the link
        const id = e.currentTarget.getAttribute("href").slice(1);
        const el = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixNav = navBar.classList.contains("fix-nav");
        let position = el.offsetTop - navHeight;

        if(navHeight > 82 ) {
            position = position + containerHeight;
        } else if (!fixNav) {
            position = position + navHeight + navHeight;
        } 

        window.scrollTo({
            left: 0,
            top: position
        });

        navContainer.style.height = "0";

    })
})

gsap.from('.logo', { opacity: 0,  duration: 1, delay: 0.5, y: -10 } )
gsap.from('.hamburger', { opacity: 0,  duration: 1, delay: 1, x: 20 } )
gsap.from('.hero h1', { opacity: 0,  duration: 1, delay: 1.5, y: -100 } )
gsap.from('.hero p', { opacity: 0,  duration: 1, delay: 2, x: -100 } )
gsap.from('.hero .btn1', { opacity: 0,  duration: 1, delay: 2.5, x: -20 } )
gsap.from('.hero .btn2', { opacity: 0,  duration: 1, delay: 2.5, x: 20 } )
gsap.from('.nav__item', { opacity: 0,  duration: 1, delay: 1.2, y: 30,  stagger: .2 } )


AOS.init()





