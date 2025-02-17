document.getElementById('welcomeForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    if (name && surname) {
        document.getElementById('welcomeMessage').textContent = `Welcome ${name} ${surname}`;
    } else {
        document.getElementById('welcomeMessage').textContent = "Please enter both your name and surname.";
    }
}
