// scripts.js
function formValidation(){
    let name = document.getElementById("input-name").value
    console.log(name);

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const destination = document.getElementById('destination').value.trim();

        if (name === '' || email === '' || destination === '') {
            alert('All fields are required!');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        // If validation passes, submit the form (you can also handle the form data here)
        alert('Form submitted successfully!');
        form.reset();
    });

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}