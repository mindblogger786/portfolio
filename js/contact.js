
gsap.from(".contact-form", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
gsap.from(".social-links a", { opacity: 0, scale: 0.5, duration: 0.5, stagger: 0.2, delay: 0.5 });


(function() {
    emailjs.init("3lvAMEuan8h_UVk1W");
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    emailjs.send("service_g4xz479", "template_zs5rt8n", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }).then(
        function(response) {
            document.getElementById("statusMessage").style.display = "block";
            document.getElementById("contactForm").reset();
        },
        function(error) {
            alert("Failed to send message. Please try again.");
        }
    );
});