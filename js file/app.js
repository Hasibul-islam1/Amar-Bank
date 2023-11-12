document.getElementById("Sign-Up-btn").addEventListener("click",()=>{
   let email= document.getElementById("email");
   let password= document.getElementById("password");
   let email_value=email.value;
   let mainpassword=password.value;

   if (email_value.includes('@')&&email_value.includes(".")) {
    if (mainpassword.length>=8){
      
      window.location.href="main.html"

    }
    else{
      alert("Enter you right Password")
    }
   }
   else{
      alert("Enter your right email")
   }
})
// it full login page 