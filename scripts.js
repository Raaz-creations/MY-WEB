document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    if(name && email && message) {
        alert('Form submitted successfully!');
        // Here you can add code to send form data to your server
    } else {
        alert('Please fill in all fields.');
    }
});
