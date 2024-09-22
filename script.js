function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.slider-nav a');
let currentIndex = 0;
const intervalTime = 2500; // Time in milliseconds

function goToSlide(index) {
    slider.scrollTo({
        left: index * slider.clientWidth,
        behavior: 'smooth'
    });
    updateDots(index);
}

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}

// Initialize slider
goToSlide(currentIndex);
setInterval(nextSlide, intervalTime);
function calculateLoan() {
    // Get values from input fields
    const price = parseFloat(document.getElementById('price').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const months = parseInt(document.getElementById('months').value);
    const downpayment = parseFloat(document.getElementById('downpayment').value);

    // Check for valid inputs
    if (isNaN(price) || isNaN(rate) || isNaN(months) || isNaN(downpayment)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Calculate loan amount
    const loanAmount = price - downpayment;

    // Calculate monthly payment using loan formula
    const monthlyPayment = (loanAmount * rate) / (1 - Math.pow(1 + rate, -months));

    // Calculate total interest payment
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - loanAmount;

    // Display results
    document.getElementById('monthly-payment').innerText = monthlyPayment.toFixed(2);
    document.getElementById('total-interest').innerText = totalInterest.toFixed(2);
    document.getElementById('results').style.display = 'block';
} 