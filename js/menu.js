var mobileMenu = document.getElementById('js-mobile-menu')
var header = document.getElementById('header')
var headerHeight = header.clientHeight

// Menu button on Header
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight
    if (isClose) {
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }
}

// Click on Menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
console.log(menuItems);

for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i]

    menuItem.onclick = function(event) {
        var isMenu = this.nextElementSibling &&
            this.nextElementSibling.classList.contains('subnav');
        if (isMenu) {
            event.preventDefault();
        }
        else{
            header.style.height = null;
        }
    }
}