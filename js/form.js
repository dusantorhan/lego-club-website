document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    let group = document.querySelector('input[name="group"]:checked');
    let interests = document.querySelectorAll('input[name="interest"]:checked');

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        formMessage.innerText = "Please enter your name.";
        formMessage.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        formMessage.innerText = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    if (!group) {
        formMessage.innerText = "Please select an age group.";
        formMessage.style.color = "red";
        return;
    }

    if (interests.length === 0) {
        formMessage.innerText = "Please select at least one interest.";
        formMessage.style.color = "red";
        return;
    }

    if (message === "") {
        formMessage.innerText = "Please enter your message.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerText = "Form submitted successfully!";
    formMessage.style.color = "green";

    document.getElementById("contactForm").reset();
});