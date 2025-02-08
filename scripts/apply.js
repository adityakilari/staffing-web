document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.getElementById('applyButton');
    const modal = document.getElementById('applyModal');
    const closeModal = document.getElementById('closeModal');
    const applyForm = document.getElementById('applyForm');

    // Ensure modal is hidden on page load
    modal.style.display = 'none';

    // Show modal when "Apply Now" is clicked
    applyButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });

    // Close modal when "X" button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
