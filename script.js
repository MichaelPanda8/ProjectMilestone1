//add a function that user could input their information
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Make sure client fill the right information
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  //tell users when they input correct information
  alert('Thanks for your patience and filling!');

  // record users' information for future development 
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
});
