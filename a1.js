// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name && email && message) {
        alert(`Thank you for contacting me, ${name}! I will get back to you soon.`);
        document.getElementById('contact-form').reset(); // Reset form after submission
    } else {
        alert("Please fill in all the fields.");
    }
});
