/*=========================================
      SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*=========================================
      ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(window.pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/*=========================================
      NAVBAR SHADOW
=========================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

    }

    else{

        navbar.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

    }

});


/*=========================================
      SCROLL REVEAL ANIMATION
=========================================*/

const revealElements=document.querySelectorAll(".section,.card,.stat-box");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

revealElements.forEach(element=>{

    element.classList.add("hidden");

    observer.observe(element);

});


/*=========================================
      TYPING EFFECT
=========================================*/

const words=[

"Cybersecurity Engineer",

"Ethical Hacker",

"Penetration Tester",

"Python Developer"

];

const typingElement=document.querySelector(".hero-content h2");

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typeEffect(){

    let currentWord=words[wordIndex];

    if(!deleting){

        typingElement.textContent=currentWord.substring(0,charIndex++);

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent=currentWord.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


/*=========================================
      COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

    const update=()=>{

        const target=+counter.innerText.replace("+","");

        const count=+counter.getAttribute("data-count")||0;

        const increment=Math.ceil(target/60);

        if(count<target){

            const newCount=count+increment;

            counter.setAttribute("data-count",newCount);

            counter.innerText=newCount+"+";

            setTimeout(update,25);

        }

        else{

            counter.innerText=target+"+";

        }

    }

    update();

});


/*=========================================
      PROFILE IMAGE ANIMATION
=========================================*/

const image=document.querySelector(".hero-image img");

image.addEventListener("mousemove",()=>{

    image.style.transform="scale(1.05) rotate(2deg)";

});

image.addEventListener("mouseleave",()=>{

    image.style.transform="scale(1) rotate(0deg)";

});


/*=========================================
      BACK TO TOP BUTTON
=========================================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
      LOADING ANIMATION
=========================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});
