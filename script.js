// ==========================================
// MOBILE MENU
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


// ==========================================
// NAVBAR SHADOW
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    }else{

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});


// ==========================================
// SCROLL REVEAL
// ==========================================

const hiddenElements = document.querySelectorAll(".section,.card,.stat-box");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ==========================================
// TYPING EFFECT
// ==========================================

const words = [

    "Cybersecurity Engineer",

    "Ethical Hacker",

    "Penetration Tester",

    "Python Developer"

];

const typing = document.querySelector(".hero-content h2");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    let currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex == 0){

            deleting = false;

            wordIndex = (wordIndex+1)%words.length;

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 80;

    function update(){

        if(count < target){

            count += speed;

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(update);

        }else{

            counter.innerText = target + "+";

        }

    }

    update();

});


// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==========================================
// IMAGE HOVER EFFECT
// ==========================================

const profile = document.querySelector(".hero-image img");

profile.addEventListener("mouseenter",()=>{

    profile.style.transform="scale(1.05)";

});

profile.addEventListener("mouseleave",()=>{

    profile.style.transform="scale(1)";

});


// ==========================================
// OPTIONAL DARK MODE
// ==========================================

// HTML:
// <button id="darkMode">🌙</button>

const darkBtn = document.getElementById("darkMode");

if(darkBtn){

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

    });

}


// ==========================================
// LOADER
// ==========================================

window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.display="none";

    }

});
