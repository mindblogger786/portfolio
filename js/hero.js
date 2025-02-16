// GASP Animation for name and tagline
    
// Fade in the title
gsap.from("#welcome", { opacity: 0, y: -50, duration: 1 });
gsap.from(".buttons", { opacity: 0, scale: 0.8, duration: 1, delay: 7 });

let timeline = gsap.timeline();

// Delay and then trigger the typing animation
timeline.call(() => {
    let title = document.getElementById("title");
    title.style.animation = "typing 3s steps(30, end) forwards";
}, null, "+=0.8"); 

timeline.call(() => {
    let tagline = document.getElementById("tagline");
    tagline.style.animation = "typing 3s steps(30, end) forwards";
}, null, "+=3"); 