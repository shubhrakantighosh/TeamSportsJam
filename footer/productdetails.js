document.querySelector("#btn").addEventListener("click",myfun)

function myfun() {
    window.location.href="";


        
            var cartObj={
                productimg:"https://storage.sg.content-cdn.io/cdn-cgi/image/width=500,height=500,quality=75,format=auto,fit=cover,g=top/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/YNAKSU5BNL.jpg",
        
                productTitle:"Yonex Akayu Super 5 Badminton Shoes (Black/Neon Lime)",
        
                productStrick:3890,
        
                productPrice:2299,
                offer:41,
                rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoT2xTPkYMFeXJ9aVDeqxZQQN9FJ6U1sisCn9Ekd1mVokUw_qnSslJPJVyB5UDKCn4w&usqp=CAU",
        
        
            }
           
            localStorage.setItem("cartdata",JSON.stringify(cartObj))
        
        }

