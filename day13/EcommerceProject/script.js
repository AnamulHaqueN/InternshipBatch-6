
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get email and name from URL
const email = getQueryParam("email");
const userName = getQueryParam("name");

console.log(email, userName);



// const loginOut = document.querySelector(".logout");

// let islogin = true;

// loginOut.addEventListener("click", (e) => {
//   e.preventDefault(); 
//   if(islogin === true) {
//       loginOut.innerHTML = "Login";
//       islogin = false;
//       window.location.href = "login.html";
//    } else {
//     loginOut.innerHTML = "LogOut";
//     islogin = true;
//    }
// });



function addToCart(id,name,price){
    //console.log("Function is working");
    let obj = JSON.parse(localStorage.getItem(email));
   
    obj.cart = obj.cart || {};
    if(obj.cart[id]){   
        obj.cart[id].quantity+=1;
    }
    else{
    obj.cart[id] = {
            "title": name,
            "price":price,
            "quantity":1,
        }
    
    }
    localStorage.setItem(email,JSON.stringify(obj));
    alert(`${name} is added to cart (quantity: ${obj.cart[id].quantity})`);

}



















// const loginLogoutBtn = document.querySelector(".logout");

// // Get login state from localStorage (default to logged in if not set)
// let isLoggedIn = localStorage.getItem("isLoggedIn") === "false" ? false : true;

// // Update button text based on login state
// loginLogoutBtn.innerHTML = isLoggedIn ? "Logout" : "Login";

// loginLogoutBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (isLoggedIn) {
//     // User clicked "Logout" → change button text to Login
//     loginLogoutBtn.innerHTML = "Login";
//     isLoggedIn = false;
//     localStorage.setItem("isLoggedIn", "false");
//   } else {
//     // User clicked "Login" → redirect to login page
//     window.location.href = "login.html";
//   }
// });



