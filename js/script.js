
// function for send message
function sendMessage() {

    // declare variables
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let messagesub = document.querySelector('#message-sub').value;
    let message = document.querySelector('#message').value;

    // Check all fields
    if (name === '' || email === '' || messagesub === '' || message === '') {
        document.querySelector('.alert').style.display = 'block';
    } else {
        alert("Thank You! Your message is received")
    }
}

function hidde() {
    document.querySelector('.alert').style.display = 'none';
}