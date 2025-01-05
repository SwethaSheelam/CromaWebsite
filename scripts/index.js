// script.js

document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;
  
    // Simulate order ID
    const orderId = `ORD${Math.floor(Math.random() * 100000)}`;
  
    // Show success message
    const successMessage = document.getElementById('orderSuccessMessage');
    successMessage.classList.remove('hidden');
    document.getElementById('orderId').innerText = orderId;
  
    // Clear the form
    this.reset();
  
    // Log the order details (optional)
    console.log('Order Details:', { name, email, address, payment, orderId });
  });
  