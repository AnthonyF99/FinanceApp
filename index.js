const menuBtn = document.getElementById("menu-btn-phone");
const sideNavUl = document.getElementById("links");
const sideNav = document.querySelector(".sidenav");
let isOnMobile

// Mobile design manager
menuBtn.onclick = function() {
    if (sideNavUl.style.display === "none" && isOnMobile) {
        sideNavUl.style.display = "block";
        sideNav.style.width = "100%";
        sideNav.style.height = "200px";
     } else {
        sideNavUl.style.display = "none";
        sideNav.style.height = "50px"
     }
     CheckOnMobile()
}

function CheckOnMobile() {
    if (window.innerWidth < 640) {
        isOnMobile = true;
    } else {
        isOnMobile = false;
    }
    
}