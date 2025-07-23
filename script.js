const newYear = new Date().getFullYear()
console.log(newYear)



// year
  
  let currentYear = 2024;
  let currentMonth = 11; 

   
  const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
  ];

  
  function nextMonth() {
      currentMonth++;  
      
       
      if (currentMonth >= 12) {
          currentMonth = 11; 
          currentYear++;   
      }
 
      document.getElementById("display").textContent = 
          `Year: ${currentYear}, Month: ${months[currentMonth]}`;
  }



  // contact
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form refresh
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
      const message = document.getElementById('message').value.trim();
  
      const nameRegex = /^[A-Za-z\s]+$/; // Letters and spaces only
      const responseMessage = document.getElementById('responseMessage');
    
      // Clear previous messages
      responseMessage.className = 'response-message';
      responseMessage.textContent = '';
  
      if (!name || !email || !mobile || !message) {
        responseMessage.classList.add('error');
        responseMessage.textContent = 'Please fill out all fields.';
        return;
      }
  
      if (!nameRegex.test(name)) {
        responseMessage.classList.add('error');
        responseMessage.textContent = 'Name must contain only letters and spaces.';
        return;
      }
  
      // Display success message
      responseMessage.classList.add('success');
      responseMessage.textContent = 'Form submitted successfully!';
  
      // Clear the form
      document.getElementById('contactForm').reset();
    });
  });
  