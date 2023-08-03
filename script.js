function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // You can add more complex validation here, such as checking email format.
  
    // If all fields are filled and validated, redirect to the success page.
    window.location.href = "success.html";
  }
  