// Contact form validation and feedback
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    // Create a feedback div for displaying messages
    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = 'form-feedback';
    feedbackDiv.style.padding = '10px';
    feedbackDiv.style.marginTop = '15px';
    feedbackDiv.style.borderRadius = '5px';
    feedbackDiv.style.display = 'none';
    contactForm.appendChild(feedbackDiv);
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validate inputs
      if (name === '' || email === '' || message === '') {
        showFeedback('Please fill in all fields', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback('Please enter a valid email address', 'error');
        return;
      }
      
      // Simulate form submission (since we don't have backend)
      showFeedback('Sending your message...', 'pending');
      
      // Simulate API call delay
      setTimeout(() => {
        showFeedback('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();
        
        // Reset form after a few seconds
        setTimeout(() => {
          feedbackDiv.style.display = 'none';
        }, 5000);
      }, 1500);
    });
    
    function showFeedback(message, type) {
      const feedbackDiv = document.getElementById('form-feedback');
      feedbackDiv.style.display = 'block';
      feedbackDiv.textContent = message;
      
      // Style based on message type
      if (type === 'error') {
        feedbackDiv.style.backgroundColor = '#FFE6E6';
        feedbackDiv.style.color = '#D8000C';
      } else if (type === 'success') {
        feedbackDiv.style.backgroundColor = '#DFF2BF';
        feedbackDiv.style.color = '#4F8A10';
      } else if (type === 'pending') {
        feedbackDiv.style.backgroundColor = '#BDE5F8';
        feedbackDiv.style.color = '#00529B';
      }
    }
  }
});