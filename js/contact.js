document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    alert("Your message has been sent successfully!");
    this.reset();
});
gsap.from(".contact-form", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
gsap.from(".social-links a", { opacity: 0, scale: 0.5, duration: 0.5, stagger: 0.2, delay: 0.5 });