errorDisplay = document.getElementById('error-display');
const showError = (message) => {
    errorDisplay.innerHTML = `
    <h4>${message}</h4>
    `;
    errorDisplay.style.display = 'block';

    // setting timeout to auto disappear
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 5000); // 5000 milliseconds (5 seconds)
}