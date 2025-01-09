// Function to load HTML content dynamically (for header and footer)
function loadHTML(elementId, filename) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}
window.onload = function() {
    loadHTML('header', '../pages/header.html');
    loadHTML('footer', '../pages/footer.html');
};