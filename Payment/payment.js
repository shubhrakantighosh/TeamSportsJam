let h3=document.createElement("h3");
let h5=document.createElement("h5");
h3.innerText="3400.00";
h3.style.color="blue";
h5.innerText="(Total Amount Payable)";
h5.style.marginLeft="10px";
document.querySelector("#amountbox").append(h3,h5);

let h4=document.createElement("h4");
h4.innerText="(Total Amount)";

let order=document.createElement("h3");
order.innerText="ORDER DETAILS";

let ordernumber=document.createElement("h4");
ordernumber.innerText="Order#: 42527";

let h41=document.createElement("h4");
h41.innerText="Total Amount 3400";

document.querySelector("#billinfobox>div:last-child").append(order,ordernumber,h41);

document.querySelector("#cardpayment").addEventListener("submit",mycheck);

function mycheck(){
    event.preventDefault();
   let cardno=document.querySelector("#cardno").value;
   let month=document.querySelector("#month").value;
   let year=document.querySelector("#year").value;
   let cvv=document.querySelector("#cvv").value;
   if(cardno=="4567891011121123"&&month=="04"&&year=="2023"&&cvv==123){
       window.location.href="otp.html";
   }
   else{
       alert("Invalid Card Details");
   }
}

let signarr=JSON.parse(localStorage.getItem("signinprocess"))
let name1=signarr[0].firstname
let mobile1=signarr[0].mobile_no;
let email1=signarr[0].email;

let name=document.createElement("p");
name.innerText=name1;
name.style.color="blue";
document.querySelector("#billinfobox>div>form>div:first-child").append(name);
let mobile=document.createElement("p")
mobile.style.color="blue";
mobile.innerText=mobile1;
document.querySelector("#billinfobox>div>form>div:nth-child(7)").append(mobile);
let email=document.createElement("p");
email.innerText=email1;
email.style.color="blue";
document.querySelector("#billinfobox>div>form>div:nth-child(8)").append(email);
