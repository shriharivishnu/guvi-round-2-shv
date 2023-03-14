  
// Input Validation using JS
  
  // Validate Username
    let usernameError = true;
    $("#firstname").keyup(function () {
      validateUsername();
    });

    const firstname = document.getElementById('firstname');
    function validateUsername() {
      let usernameValue = $("#firstname").val();
      let usernameError = true;
      firstname.classList.remove("is-invalid");
      if (usernameValue.length == "") {
        usernameError = false;
        firstname.classList.add("is-invalid");
        return false;
      } else if (usernameValue.length < 3 || usernameValue.length > 10) {
        firstname.classList.add("is-invalid");
        usernameError = false;
        return false;
      } 
    }
   

    
    $("#lastname").keyup(function () {
      validateUsername2();
    });

    const lastname = document.getElementById('lastname');
    function validateUsername2() {
      let usernameValue = $("#lastname").val();
      let usernameError = true;
      lastname.classList.remove("is-invalid");
      if (usernameValue.length == "") {
        usernameError = false;
        lastname.classList.add("is-invalid");
        return false;
      } else if (usernameValue.length < 3 || usernameValue.length > 10) {
        lastname.classList.add("is-invalid");
        usernameError = false;
        return false;
      } 
    }



    
    // Validate Email

    let emailError = true;
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
      let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
      let s = email.value;
      if (regex.test(s)) {
        email.classList.remove("is-invalid");
        emailError = true;
      } else {
        email.classList.add("is-invalid");
        emailError = false;
      }
    });



   
    // Validate Password

    const password = document.getElementById('password');
    let passwordError = true;
    $("#password").keyup(function () {
      validatePassword();
    });
    function validatePassword() {
      let passwordValue = $("#password").val();
      let passwordError = true;
      password.classList.remove("is-invalid");
      if (passwordValue.length == "") {
        passwordError = false;
        password.classList.add("is-invalid");
        return false;
      }
      if (passwordValue.length < 3 || passwordValue.length > 10) {
        password.classList.add("is-invalid");
        passwordError = false;
        return false;
      }
    }


   
    // Validate Confirm Password

    const repassword = document.getElementById('re-password');
    let confirmPasswordError = true;
    $("#re-password").keyup(function () {
      validateConfirmPassword();
    });
    function validateConfirmPassword() {
      let confirmPasswordValue = $("#re-password").val();
      let passwordValue = $("#password").val();
      repassword.classList.remove("is-invalid");
      if (passwordValue != confirmPasswordValue) {
        repassword.classList.add("is-invalid");
        confirmPasswordError = false;
        return false;
      }else{
        confirmPasswordError = true;
      }
    }

    
   
    // User data to MySQL database

    $('#signup').submit(function (evt) {
    evt.preventDefault();
   
    });

    $("#submit").click(function () {
        validateUsername();
        validateUsername2();
        validatePassword();
        validateConfirmPassword();
        if (
            usernameError == true &&
            passwordError == true &&
            confirmPasswordError == true &&
            emailError == true
          ) {
            var data = {
                firstname:document.getElementsByName('firstname')[0].value,
                lastname:document.getElementsByName('lastname')[0].value,
                email:document.getElementsByName('email')[0].value,
                password:document.getElementsByName('re-password')[0].value,
            }
          if(data.firstname !='' && data.lastname !='' && data.email !='' && data.password !=''){
                $.ajax({
                    url:'php/register.php',
                    type:'post',
                    data:data,
                    success:function(response){
                      const existing = document.getElementById('existing');
                        if(response==="existing"){
                          existing.classList.add("show");
                          existing.classList.add("alert");
                        }else{
                          alert("Registration Successful");
                          window.location.href="login.html";
                        }
                    }
                })
          }
          } else {
            alert("Please fill every field");
          }
    })