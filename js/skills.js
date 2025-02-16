gsap.to(".skills-column", { opacity: 1, y: -20, duration: 1, stagger: 0.3 });
        
document.querySelectorAll(".skill").forEach(skill => {
    let percentage = skill.getAttribute("data-skill");
    let tooltip = skill.querySelector(".tooltip");
    let progressFill = skill.querySelector(".progress-fill");
    skill.addEventListener("mouseover", () => {
        tooltip.style.display = "block";
        gsap.to(progressFill, { width: percentage + "%", duration: 2, ease: "power2.out" });
    });
    skill.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
        gsap.to(progressFill, { width: "0%", duration: 0.5 });
    });
});