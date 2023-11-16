// script.js
document.getElementById('contactBtn').addEventListener('click', openModal);

function openModal() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('contactModal')) {
        closeModal();
    }
});