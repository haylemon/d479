document.addEventListener('DOMContentLoaded', function() {
    
    const bookNowBtn = document.querySelector('.book-now');
    const confirmPopup = document.getElementById('confirmation-popup');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const submitBtn = document.querySelector('.submit-btn'); 
    
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            alert('Message sent.');
        });
    }
    
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', function() {
            confirmPopup.style.display = 'block';
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            confirmPopup.style.display = 'none';
            alert('Your trip is booked! Thanks for choosing Taniti Island.');
        });
    }

    if (noBtn) {
        noBtn.addEventListener('click', function() {
            confirmPopup.style.display = 'none';
        });
    }
});
