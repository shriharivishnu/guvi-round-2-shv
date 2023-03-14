// Login & logout Authentication

const loggedin = document.querySelectorAll("#login");
const loggedout = document.querySelectorAll("#logout");
if(localStorage.getItem('userdata')==null){
    $(loggedout).show();
    $(loggedin).hide();
    
}else{
    $(loggedin).show();
    $(loggedout).hide();
}

function logout(){
    localStorage.removeItem('userdata');
    window.location.href="index.html";
}