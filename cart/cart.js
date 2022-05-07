var productArr= [

    {
        productimg:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNAKSU5BNL.jpg",

        productTitle:"Yonex Akayu Super 5 Badminton Shoes (Black/Neon Lime)",

        productStrick:"₹3890",

        productPrice:2299,
        offer:41,
        rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoT2xTPkYMFeXJ9aVDeqxZQQN9FJ6U1sisCn9Ekd1mVokUw_qnSslJPJVyB5UDKCn4w&usqp=CAU",


    },  
    {
        productimg:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNAKSU5BNL.jpg",

        productTitle:"Yonex Akayu Super 5 Badminton Shoes (Black/Neon Lime)",

        productStrick:"₹3890",

        productPrice:2299,
        offer:41,
        rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoT2xTPkYMFeXJ9aVDeqxZQQN9FJ6U1sisCn9Ekd1mVokUw_qnSslJPJVyB5UDKCn4w&usqp=CAU",


    },  
    {
        productimg:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNAKSU5BNL.jpg",

        productTitle:"Yonex Akayu Super 5 Badminton Shoes (Black/Neon Lime)",

        productStrick:"₹3890",

        productPrice:2299,
        offer:41,
        rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoT2xTPkYMFeXJ9aVDeqxZQQN9FJ6U1sisCn9Ekd1mVokUw_qnSslJPJVyB5UDKCn4w&usqp=CAU",


    },  ]


    // localStorage.setItem("cartdata",JSON.stringify(productArr))

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
  
        var quantity = document.createElement("p")
        document.querySelector(".quantity").append(quantity)
        quantity.innerText=data.length;

        var Total = document.createElement("p")
        document.querySelector(".total").append(Total)
        Total.innerText="₹ " + data.length*el.productPrice;

       
        var Delete=document.createElement("button");
        Delete.innerText="Delete"
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

  function applyCoupan(){
      event.preventDefault();
        let coupon=document.querySelector("#coupon>div>div>input").value;
        if(coupon=="masai10"){
            var total= sum+(sum*12)/100
            document.querySelector("#cart-total").innerText="₹ " + (total-(total*10)/100);
        }else{
            alert("Invalid or Used Coupon")
        }
  }



