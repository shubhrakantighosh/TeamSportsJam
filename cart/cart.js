
    
    var data=JSON.parse(localStorage.getItem("cartdata"));
     var sum=0;
    data.forEach(function(el , index){
     
        var Image=document.createElement("img")
        Image.src=el.productimg
         document.querySelector(".img").append(Image)
       
        var Name=document.createElement("p");
        document.querySelector(".name").append(Name)
        Name.innerText=el.productTitle
 
        var Price=document.createElement("p");
        document.querySelector(".unitprice").append(Price)
        Price.innerText="₹" +"  "+ el.productPrice
        sum=sum+el.productPrice
      document.querySelector("#sub-total").innerText="₹" +"  "+ sum
      document.querySelector("#gst").innerText="₹ " + (sum*12)/100
      document.querySelector("#cart-total").innerText="₹ " + (sum+(sum*12)/100)

///////////voucher function
// var discount_amount=(sum+(sum*12)/100)
//       function voucherFun(){
//         localStorage.setItem("voucher",discount_amount)
//       }
  
        var quantity = document.createElement("p")
        document.querySelector(".quantity").append(quantity)
        quantity.innerText=data.length;

        var Total = document.createElement("p")
        document.querySelector(".total").append(Total)
        Total.innerText="₹ " + data.length*el.productPrice;

       
        var Delete=document.createElement("button");
        Delete.innerText="X"
        Delete.style.color="white"
        Delete.style.cursor="pointer"
        Delete.style.backgroundColor="red"
        document.querySelector(".delete").append(Delete)
        Delete.addEventListener("click", function(){
              deleteData(index)
        })


       
    



    })

    function deleteData(index){
        data.splice(index,1);
        localStorage.setItem("cartdata",JSON.stringify(data))
        window.location.reload();
        console.log("someone click me")
    }



      
  document.querySelector("#ulala").addEventListener("submit",applyCoupan);
    var count=0
  function applyCoupan(){
      event.preventDefault();
        let coupon=document.querySelector("#coupon>div>div>input").value;
        if(coupon=="masai10"){
            count++

            var total= sum+(sum*12)/100
            document.querySelector("#cart-total").innerText="₹ " + (total-(total*10)/100);
            var discount_price=(total-(total*10)/100)
            console.log(discount_price)
            if(count==1){
                localStorage.setItem("discount_price",discount_price)
            }
           
            
        }else{
            alert("Invalid or Used Coupon")
        }
  }

  

  