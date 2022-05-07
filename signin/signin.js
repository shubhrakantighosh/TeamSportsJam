
    var signarr=JSON.parse(localStorage.getItem("signinprocess"))||[];
    document.querySelector("#form").addEventListener("submit",signuppage)
    
        function signuppage(){
            event.preventDefault();
            var obj={
                firstname:document.querySelector("#name").value,
                mobile_no:document.querySelector("#phone").value,
                email:document.querySelector("#email").value,
                passwrd:document.querySelector("#password").value,
                confrm:document.querySelector("#Confirmpassword").value,
            };
            signarr.push(obj);
            console.log(signarr)
           var output= localStorage.setItem("signinprocess",JSON.stringify(signarr));
           window.location.href="login.html"
        }