function navbar(){
    return` <div id="navbar1">
    <div id="nav1">
        <button id="Shipping"><i class="fa-solid fa-truck"></i>free shipping</button>
        <button id="collect"><i class="fa-solid fa-shop"></i>click & collect</button>
        <button id="store"><i class="fa-solid fa-shop"></i>Return to store</button>
    </div>
    
    <div id="nav2">
    <button class="icon">App Download</button>
    <div id="line"></div>
    <button id="store">store locator</button>
    <div id="line"></div>
    <button id="help">Help</button>
</div>
</div>
<div id="navbar123">
    <img id="img1" src="https://quantean.com/wp-content/uploads/2021/08/Life-style.png" alt="">
    <div id="lifestyle1">
        <div id="parts1" onmouseover="navbar1()"> <a id="av" href="woman.html">Woman</a> </div>
        <div id="parts2" onmouseover="navbar2()"><a id="av" href="man.html">Men</a></div>
        <div id="parts3" onmouseover="navbar3()">Kids</div>
        <div id="parts4" onmouseover="navbar4()">Shoes&Bags</div>
        <div id="parts5" onmouseover="navbar5()">More</div>
        
    </div>
    <div class="search1">
        <div class="search2"><i id="search" class="fas fa-search"></i> <div>
        <div ><input id="sear"type="text" placeholder="What are you looking for?"></div>

    </div></div></div>

    <div id="signup">
        <button id="Account" onclick="acFunction()">Sign Up - Sign In</button>
        <div id="line1"></div>
        <buttonn id="basket" onclick="basketfucntion()">Basket
            <div id="bag"><i class="fa-solid fa-bag-shopping"></i></div></i></button>
    </div>
</div>

</div>`
}
export default navbar;