    //Login check

    if(localStorage.getItem('userdata')==null){
        alert("please Login to view this page");
        window.location.href="login.html";
    }else{
    

    //initial values from localstorage

   const userdata = localStorage.getItem('userdata');
   const uservalues = JSON.parse(userdata);
   const username = document.getElementById('username');
   const username2 = document.getElementById('username2');
   username.innerHTML = uservalues.firstname + ' ' + uservalues.lastname;
   username2.innerHTML = uservalues.firstname + ' ' + uservalues.lastname;
   const useremail = document.getElementById('useremail');
   useremail.innerHTML = uservalues.email;
   const initialname = document.getElementById('initialname');
   initialname.innerHTML = "Hi!! " + uservalues.firstname;

   
   //DOM elements to push values from mongoDB

   const phone = document.getElementById('phone');
   const dob = document.getElementById('dob');
   const age = document.getElementById('age');
   const role = document.getElementById('role');
   const gender = document.getElementById('gender');

   // Fetch from mongo

   $.ajax({
    url:'php/profile.php',
    type:'post',
    data:uservalues,
    success:function(response){
      if(response==='updatelater'){
        alert("Update your profile information");
        window.location.href="profile.html";
      }else{
        var received_data = JSON.parse(response);
        phone.innerHTML = received_data['phone'];
        dob.innerHTML = received_data['dob'];
        age.innerHTML = received_data['age'];
        role.innerHTML = received_data['role'];
        gender.innerHTML = received_data['gender'];
      }
        }
    })

    
    // Updating profile values
    
    role.addEventListener('click', (e)=>{
        e.preventDefault();
        var change = {changerole:prompt("Enter the value to change"),
                    email:uservalues.email};
        
        $.ajax({
            url:'php/profile.php',
            type:'post',
            data:change,
            success:function(response){
                if(response==='success'){
                    window.location.href="profile.html";
                }else{
                    alert("Something went wrong");
                }
            }
        })
        
    })   
  

    phone.addEventListener('click', (e)=>{
        e.preventDefault();
        var change = {changephone:prompt("Enter the value to change"),
                    email:uservalues.email};
        
        $.ajax({
            url:'php/profile.php',
            type:'post',
            data:change,
            success:function(response){
                if(response==='success'){
                    window.location.href="profile.html";
                }else{
                    alert("Something went wrong");
                }
            }
        })
        
    })   

    dob.addEventListener('click', (e)=>{
        e.preventDefault();
        var change = {changedob:prompt("Enter the value to change"),
                    email:uservalues.email};
        
        $.ajax({
            url:'php/profile.php',
            type:'post',
            data:change,
            success:function(response){
                if(response==='success'){
                    window.location.href="profile.html";
                }else{
                    alert("Something went wrong");
                }
            }
        })
        
    })  

   age.addEventListener('click', (e)=>{
        e.preventDefault();
        var change = {changeage:prompt("Enter the value to change"),
                    email:uservalues.email};
        
        $.ajax({
            url:'php/profile.php',
            type:'post',
            data:change,
            success:function(response){
                if(response==='success'){
                    window.location.href="profile.html";
                }else{
                    alert("Something went wrong");
                }
            }
        })
        
    })  
   
    gender.addEventListener('click', (e)=>{
        e.preventDefault();
        var change = {changegender:prompt("Enter the value to change"),
                    email:uservalues.email};
        
        $.ajax({
            url:'php/profile.php',
            type:'post',
            data:change,
            success:function(response){
                if(response==='success'){
                    window.location.href="profile.html";
                }else{
                    alert("Something went wrong");
                }
            }
        })
        
    })  

}

