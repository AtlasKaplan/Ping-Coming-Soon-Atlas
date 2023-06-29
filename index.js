document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.email');
    const errorEmail = document.querySelector('.error-state');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            errorEmail.classList.remove('hide');
            emailInput.classList.add('error-border');
        } else {
            errorEmail.classList.add('hide');
            emailInput.classList.remove('error-border');
        }
    });
});