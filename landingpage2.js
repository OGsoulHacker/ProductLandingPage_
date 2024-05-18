//Contact form
function showContactForm() {
    contactForm.showModal();
  }


  var contact = document.getElementById("contact");
  var contact2 = document.getElementById("contact2");

  var contactForm = document.getElementById("contact-form-container");
  var submitBtn = document.getElementById("submitBtn");
  contact.addEventListener("click", () => {
    contactForm.showModal();
});
contact2.addEventListener("click", () => {
    contactForm.showModal();
});
submitBtn.addEventListener("click", () => {
    contactForm.close();
});
  function closeContactForm() {
    document.getElementById("contact-form-container").style.display = "none";
  }
  
  function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Message").value;
  
    //confirmation message
    var confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.innerText = `Thank you, ${name}! We have received your message.`;
  }
//===================================================================================
//Subscribe form
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the email input value
    var email = document.getElementById('emailInput').value;

    // Simulate subscription process (replace with actual subscription code)
    alert('Subscribed with email: ' + email);

    // Clear the email input field after subscription
    document.getElementById('emailInput').value = '';
  });
  //===================================================================================
  //FAQ
  var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var accordianItem = this.nextElementSibling;
    if (accordianItem.style.display === "block") {
        accordianItem.style.display = "none";
    } else {
        accordianItem.style.display = "block";
    }
  });
} 
function subscribe() {
    var email = document.getElementById("client-email").value;
    if (validateEmail(email)) {
      document.getElementById("confirmation-message").innerText = "Subscription confirmed for " + email;
    } else {
      document.getElementById("confirmation-message").innerText = "Please enter a valid email address";
    }
  }
  //==================================================================================
  //Email subscription
  function validateEmail(email) {
    // Regular expression to validate email format
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }