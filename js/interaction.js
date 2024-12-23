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
                document.querySelector(btn).classList.remove("active", "default", "radius-bottom");
                document.querySelector(cnt).classList.remove("selected");
            });

            // Add 'active' and 'selected' to the clicked button and corresponding content
            btnEl.classList.add("active");
            contentEl.classList.add("selected");
        });
    });
});

// HTML structure
const desc = document.querySelector('.description-name')
const filter_dot = document.querySelector('.filter')
const Span_desc=desc.querySelectorAll("span")
const filter_span=filter_dot.querySelectorAll("span")
const Lifestyle=document.querySelector("#Lifestyle")



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
     
        
    } else {
        body.classList.add("gray")
        body.style.transition="0.7s"
        circle.classList.add('black')
        dayIcon.src = newNightImage;
        nightIcon.src = newDayImage;
        // night mode(white)
          prev.querySelector("#prev").src=arrow_white_left
          next.querySelector("#next").src=arrow_white
       
    }
});


