const bookNowBtn = document.querySelector('.book-now');
const confirmPopup = document.getElementById('confirmation-popup');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    alert('Message sent.');
});

bookNowBtn.addEventListener('click', function() {
    confirmPopup.style.display = 'block';
});

yesBtn.addEventListener('click', function() {
    confirmPopup.style.display = 'none';
    alert('Your trip is booked! Thanks for choosing Taniti Island.')
});

noBtn.addEventListener('click', function() {
    confirmPopup.style.display = 'none';
});

