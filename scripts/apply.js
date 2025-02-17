document.addEventListener('DOMContentLoaded', () => {
    const applyButton = document.getElementById('applyButton');
    const modal = document.getElementById('applyModal');
    const closeModal = document.getElementById('closeModal');
    const applyForm = document.getElementById('applyForm');

    // Show the modal when "Apply" is clicked
    applyButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = 'block';

        // Clear form fields
        applyForm.reset();
    });

    // Close the modal when "X" is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
