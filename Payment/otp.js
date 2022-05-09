document.querySelector("#otp").addEventListener("submit",myotp);
function myotp(){
    event.preventDefault();
    let otp=document.querySelector("#otp>form>input:first-child").value;
    if(otp==123){
        alert("Amount debited from Your Card");
        window.location.href="paymentsuccesspage.html";
    }
    else{
        alert("Invalid OTP");
    }
}