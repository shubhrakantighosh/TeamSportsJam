
var signarr=JSON.parse(localStorage.getItem("signinprocess"))
console.log(signarr)
document.querySelector("form").addEventListener("submit",sign);
function sign(){
    
    event.preventDefault();
   // var obj1={
    

       var email2 =document.querySelector("#email1").value;
       var passwrd2 =document.querySelector("#password1").value;
        
    //};
   
    
   //localStorage.setItem("signuppage2",JSON.stringify(signarr2))
var count=0;
     for(var i=0;i<signarr.length;i++)
     {
         if(count==0)
    if(email2 == signarr[i].email&& passwrd2 ==signarr[i].passwrd)
       {
        
alert("signup successfully")
window.location.href="index.html"
count++;
        
       
     }
    }
    if(count==0)
    {
    if(email2 != signarr.email&& passwrd2 !=signarr.passwrd)
    {
        alert("invalid email ")
        count++;
    }
}
}