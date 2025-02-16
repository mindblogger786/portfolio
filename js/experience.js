gsap.to(".job", { opacity: 1, y: -20, duration: 1, stagger: 0.3 });

document.querySelectorAll(".job h3").forEach(job => {
    job.addEventListener("click", () => {
        let details = job.nextElementSibling;
        details.style.display = details.style.display === "block" ? "none" : "block";
    });
});