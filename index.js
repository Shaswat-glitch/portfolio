document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    alert("Thank you for your message, " + name + "! We will get back to you soon.");
  });
