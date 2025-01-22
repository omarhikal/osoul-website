// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    
    // Smooth scroll effect
    window.scrollTo({
      top: targetElement.offsetTop - 50,  // Adjust the offset to account for header
      behavior: 'smooth'
    });
  });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="message"]');
  let isValid = true;

  // Reset previous error styles
  [name, email, message].forEach(input => {
    input.style.border = '1px solid #ccc';
  });

  // Check if fields are filled out
  if (name.value.trim() === '') {
    name.style.border = '1px solid red';
    isValid = false;
  }
  if (email.value.trim() === '' || !validateEmail(email.value)) {
    email.style.border = '1px solid red';
    isValid = false;
  }
  if (message.value.trim() === '') {
    message.style.border = '1px solid red';
    isValid = false;
  }

  // Prevent form submission if not valid
  if (!isValid) {
    e.preventDefault();
    alert('Please fill in all fields correctly.');
  }
});

// Email validation function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
