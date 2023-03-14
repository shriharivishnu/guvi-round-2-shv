
// Authentication

if(localStorage.getItem('userdata')!=null){
    window.location.href="profile.html";
}

// Ajax sending data to php

$('#loginform').submit(function (evt) {
    evt.preventDefault();
   
    });

    $("#login").click(function () {
            var data = {
                email:document.getElementsByName('email')[0].value,
                password:document.getElementsByName('password')[0].value,
            }
          if(data.email !=''){
                $.ajax({
                    url:'php/login.php',
                    type:'post',
                    data:data,
                    success:function(response){
                        const notregistered = document.getElementById('notregistered');
                        const incorrectpass = document.getElementById('incorrectpass');
                            
                        if(response==="Not an account"){
                            notregistered.classList.add("show");
                            notregistered.classList.add("alert");
                        }else if(response==="incorrect password"){
                            incorrectpass.classList.add("show");
                            incorrectpass.classList.add("alert");
                        }else{
                            localStorage.setItem('userdata', response);
                            window.location.href = "profile.html";
                        }
                    }
                })
          }
           else {
            alert("Please fill every field");
          }
    })

