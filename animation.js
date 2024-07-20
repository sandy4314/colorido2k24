document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.particles span');

    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Delay each letter's animation
    });

    const registerBtn = document.getElementById('register-btn');
    registerBtn.addEventListener('click', () => {
        window.location.href = 'index.html'; // Replace 'index.html' with your actual file name
    });
});