
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

    for(var i=0;i<signarr.length;i++)
    {
    
       
        if(email2 == signarr[i].email&& passwrd2 ==signarr[i].passwrd)
        {
alert("signup successfully")
        }
        else{
            alert("invalid email or password")
        }
    }
}