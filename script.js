// Smooth Scroll to Section
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    let valid = true;

    // Check if First Name is filled
    const fname = document.getElementById('fname').value.trim();
    if (!fname) {
        alert('Please enter your First Name.');
        valid = false;
    }

    // Check if Last Name is filled
    const lname = document.getElementById('lname').value.trim();
    if (!lname) {
        alert('Please enter your Last Name.');
        valid = false;
    }

    // Check if Country is selected
    const country = document.getElementById('country').value;
    if (!country) {
        alert('Please select your Country.');
        valid = false;
    }

    // Check if Message is filled
    const subject = document.getElementById('subject').value.trim();
    if (!subject) {
        alert('Please enter a message.');
        valid = false;
    }

    if (!valid) {
        // Prevent form from submitting if validation fails
        e.preventDefault();
    }
});
