let slideIndex = 0;
const showSlides = () => {
    console.log("function is calling");
    const slides = document.getElementsByClassName("myslides");
    const dots = document.getElementsByClassName("dot")
    console.log(slides);
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
};
showSlides(); 


// signup------------------------------------------------------------------------------------------------//
var Usar = JSON.parse(localStorage.getItem("User"));
document.getElementById("userValue").textContent= Usar;
var signStatus = JSON.parse(localStorage.getItem("signIn"));
if(signStatus=="signedUp"){
function acFunction(){
var account=document.getElementById("acountSign");
account.style.display="block";

window.onclick = function(event) {
if (event.target == account) {
account.style.display = "none";
}
}
}
} else{
function acFunction(){
var account=document.getElementById("Account");
acount.style.display="block";

console.log(signStatus);8

window.onclick = function(event) {
if (event.target == acount) {
acount.style.display = "none";
}
}
}
}

// ================================================================================logout====================================================================================
function logOut(){
   localStorage.removeItem("User");
   localStorage.removeItem("signIn");
   window.location.href="mainpage.html";
}

// ===================================================================================Wish List=========================================================================
if(signStatus=="signedUp"){
    function wishFun(){
        window.location.href="wish.html"
    }
}else{
    function wishFun(){
    var span = document.getElementById("crossed");
   var signupOrLogin= document.getElementById("loginOrSignup");
   signupOrLogin.style.display="block";
   window.onclick=function(event){
       if(event.target == signupOrLogin){
           signupOrLogin.style.display="none";
           document.getElementById("acount").style.display="none";
       }
   }
   span.onclick=function(){
       signupOrLogin.style.display="none";
       document.getElementById("acount").style.display="none";
   }

}
}
// ====================================================================================empty cart=================================================================
var cartStatus = JSON.parse(localStorage.getItem("Item"));
if(cartStatus=="added" && signStatus=="signedUp"){
  function openCart(){
      var Cart = document.getElementById("cart");
      Cart.style.display="block";
      var data = JSON.parse(localStorage.getItem("addedItem"));
      document.getElementById("prodName").textContent=data.name;
      document.getElementById("prodColor").textContent=data.color;
      document.getElementById("prodSize").textContent=data.size;
      document.getElementById("prodPrice").textContent=("₹") + data.price;
      document.getElementById("prodPrice1").textContent=("₹") + data.price;
      document.getElementById("prodPrice2").textContent=("₹") + data.price;
      document.getElementById("prodPrice3").textContent=("₹") + data.price;

      console.log(data);
      var image = document.createElement("img")
      image.setAttribute("src",(data.img))
      document.getElementById("cartimg").append(image);
      window.onclick=function(event){
         if(event.target==Cart){
            //  Cart.style.display="none"
            window.location.href="mainpage.html";
         }
     }
  }
}else{    
    function openCart(){
var Cart = document.getElementById("Cart");
Cart.style.display="block";
window.onclick=function(event){
  if(event.target==Cart){
      Cart.style.display="none";
  }
} 
}}


function goToShop(){
    // Cart.style.display="none";
    // cart.style.display="none";
    window.location.href="mainpage.html"
}

//  -----------------------------------------------------------------------------------open signup page
function openSign(){
var logUp= document.getElementById("logUp");
logUp.style.display="block";

window.onclick=function(event){
   if(event.target==logUp){
       logUp.style.display="none";
   }
}
var span = document.getElementById("back")
span.onclick =function(){
logUp.style.display="none";
}
document.getElementById("gbsignIn").onclick=function(){
    logUp.style.display="none"; 
}
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~signup entry``~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById("signUp").addEventListener("click", signUp);
userData=JSON.parse(localStorage.getItem("userDatabase"))||[]
function signUp(){
   var user = document.getElementById("userName").value;
   var phone = document.getElementById("mobileNumber").value;
   var mail = document.getElementById("mailId").value;
   var password=document.getElementById("passWord").value;

   var userobj={
       user:user,
       phone:phone,
       mail:mail,
       password:password
   }

   userData.push(userobj);
   localStorage.setItem("userDatabase", JSON.stringify(userData));
   window.location.href="woman.html";
   alert("Signed Up Succesfuly Now you can sign in")
}

// ================================================================================================Sign in===================================================================
document.getElementById("signInn").addEventListener("click", signInfu);
var regUserData = JSON.parse(localStorage.getItem("userDatabase"));


function signInfu(){
 var email=document.getElementById("emailId").value;
 var password=document.getElementById("pasword").value;

          var func = "Noworking";
        for(var i = 0; i < regUserData.length; i++){
            if (regUserData[i].mail==email && regUserData[i].password==password){
                localStorage.setItem("signIn", JSON.stringify("signedUp"));
                localStorage.setItem("User", JSON.stringify(regUserData[i].mail));
                func = "working";
                alert("Signed in Succesfully Now fill your Bag with happiness!")
                window.location.href="mainpage.html";
               
            }
        } if(func=="Noworking"){
            document.getElementById("paragraph").textContent="! Wrong username and Password";
        }
    }


    function openSignIn(){
        var signin = document.getElementById("Signin")

        signin.style.display="block";
        window.onclick=function(event){
            if(event.target==signin){
                signin.style.display="none";
            }
        }
        var span = document.getElementById("Crosser")
        span.onclick=function(){
            signin.style.display="none";
        }
    }