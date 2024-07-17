document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    let form = document.getElementById("registration-form"); 
    let feedbackDiv = document.getElementById("form-feedback"); 

    form.addEventListener("submit",(e)=>{
        e.preventDefault();

        let username = document.getElementById("username").value.trim(); 
        let password =document.getElementById("password").value.trim(); 
        let email = document.getElementById("email").value.trim() ; 
        let isValid  = true; 
        let messages  = [] ; 
    

        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must include both "@" and "." characters.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#ffbaba';
        }
        console.log(isValid)
        console.log(username.length)
        console.log(password.length)
        console.log(email.length)
    
    })

  });
  


