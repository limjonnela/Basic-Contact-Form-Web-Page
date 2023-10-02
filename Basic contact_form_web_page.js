document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // You can add your form submission logic here
    const formData = new FormData(event.target);
    console.log('Form Data:', Object.fromEntries(formData));

    // Redirect to the Thank You page
    window.location.href = 'Thank you_Web_Page.html';
  });