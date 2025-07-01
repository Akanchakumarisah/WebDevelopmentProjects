const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const dobInput = document.getElementById('dob');
const termsCheckbox = document.getElementById('terms');
const confirmationMessage = document.getElementById('confirmationMessage');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const dobError = document.getElementById('dobError');
const termsError = document.getElementById('termsError');

function validateName() {
  const regex = /^[A-Za-z\s]+$/;
  if (!regex.test(nameInput.value.trim())) {
    nameError.textContent = "Name can contain only letters and spaces.";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePhone() {
  const regex = /^\d{10}$/;
  if (!regex.test(phoneInput.value.trim())) {
    phoneError.textContent = "Phone must be a 10-digit number.";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

function validateDOB() {
  const today = new Date();
  const dob = new Date(dobInput.value);
  if (dob > today) {
    dobError.textContent = "Date of birth cannot be in the future.";
    return false;
  } else {
    dobError.textContent = "";
    return true;
  }
}

function validateTerms() {
  if (!termsCheckbox.checked) {
    termsError.textContent = "You must agree to the Terms & Conditions.";
    return false;
  } else {
    termsError.textContent = "";
    return true;
  }
}


nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
dobInput.addEventListener('change', validateDOB);

form.addEventListener('submit', function(e) {
 
  let valid = validateName() & validateEmail() & validatePhone() & validateDOB() & validateTerms();

  if (!valid) {
    e.preventDefault(); 
  } else {
    
    const course = document.getElementById('course').value;
    confirmationMessage.textContent = `Thank you, ${nameInput.value}. You have registered for the ${course} course.`;
    confirmationMessage.style.display = 'block';
   
  }
});
