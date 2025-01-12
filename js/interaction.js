 document.addEventListener("DOMContentLoaded", () => {
    const categories = [
        { button: "#Fashion", content: ".Fashion" },
        { button: "#Technology", content: ".Technology" },
        { button: "#Cooking", content: ".Cooking" },
        { button: "#Health", content: ".Health" },
        { button: "#Lifestyle", content: ".Lifestyle" },
    ];

    categories.forEach(({ button, content }) => {
        const btnEl = document.querySelector(button);
        const contentEl = document.querySelector(content);

        btnEl.addEventListener("click", () => {
            // Remove 'default', 'active', and 'selected' from all buttons and contents
            categories.forEach(({ button: btn, content: cnt }) => {
                document.querySelector(btn).classList.remove("active", "default", "radius-bottom","radius-top");
                document.querySelector(cnt).classList.remove("selected");
             });
            if (btnEl == Lifestyle){
                btnEl.classList.add("radius-bottom");
            }
            else{
                if(btnEl==Fashion){
                btnEl.classList.add("radius-top");
                }
            }
                btnEl.classList.add("active");
                contentEl.classList.add("selected");
                               
        });
    });
});

// HTML structure
const desc = document.querySelector('.description-name')
const filter_dot = document.querySelector('.filter-bar')
const Span_desc=desc.querySelectorAll("span")
const filter_span=filter_dot.querySelectorAll("span")
const Lifestyle=document.querySelector("#Lifestyle")
const Fashion=document.querySelector("#Fashion")
// footer nav
const links=document.querySelector(".links")
const production=document.querySelector('#Production')




const switcher = document.querySelector('.switcher');
const circle = document.querySelector('.circle');
const dayIcon = document.querySelector('.day');
const nightIcon = document.querySelector('.night');
const body=document.body
// prev and next
const prev = document.querySelector(".previous")
const next = document.querySelector(".next")



// Image paths for toggling
const newDayImage = './assets/img/logo_assets/Untitled.png';
const newNightImage = './assets/img/logo_assets/Night.svg';
const originalDayImage = './assets/img/logo_assets/Ellipse 3.svg';
const originalNightImage = './assets/img/logo_assets/Subtract.svg';
// prev and next navigation arrow toggling
const arrow_left='./assets/img/logo_assets/arrow.png';
const arrow='./assets/img/logo_assets/arrow-left.png';

const arrow_white_left='./assets/img/logo_assets/arrow_left_white.png';
const arrow_white='./assets/img/logo_assets/arrow_white.png';

// Initial states
let isDay = true;

// Switcher toggle function
dayIcon.addEventListener('click', () => {
    isDay = !isDay;

    if (isDay) {
        // Day mode styles
        circle.classList.remove('black')
        body.classList.remove("gray")
        dayIcon.src = originalDayImage;
        nightIcon.src = originalNightImage;
        // day light
        prev.querySelector("#prev").src=arrow_left
        next.querySelector("#next").src=arrow
        filter_dot.classList.remove("Bg-Color-Night")
        desc.classList.remove("Bg-Color-Night")
        links.classList.remove("bg-white") 
        production.classList.remove("text-black")     
     
        
    } else {
        body.classList.add("gray")
        body.style.transition="0.9s"
        circle.classList.add('black')
        dayIcon.src = newNightImage;
        nightIcon.src = newDayImage;
        // night mode(white)
          prev.querySelector("#prev").src=arrow_white_left
          next.querySelector("#next").src=arrow_white
          filter_dot.classList.add("Bg-Color-Night")
          desc.classList.add("Bg-Color-Night")
          links.classList.add("bg-white")
          production.classList.add("text-black")   
          production.classList.add("p-2")   
       
    } 
});


