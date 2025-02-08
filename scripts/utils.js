let currentIndex = 0;

function changeSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Move to the selected slide
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active class on indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3; // assuming 3 slides
    changeSlide(currentIndex);
}, 5000);

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
