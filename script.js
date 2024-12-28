const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener ('click', () =>{
    logregBox.classList.add('active');
});


/* Alternatives, code breakdown

document.addEventListener('DOMContentLoaded', function() {
    const logregBox = document.querySelector('.logreg-box');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    if (registerLink && logregBox) {
        registerLink.addEventListener('click', () => {
            logregBox.classList.add('active');
        });
    }
});
*/

loginLink.addEventListener ('click', () =>{
    logregBox.classList.remove('active');
});
