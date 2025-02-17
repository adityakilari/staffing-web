let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
// Function to change slide
function changeSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update indicator
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

// Auto slide every 3 seconds
setInterval(() => {
    changeSlide(currentSlide + 1);
}, 3000);

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

