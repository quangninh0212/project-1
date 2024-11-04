const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
if(buttonMenuMobile) {
    const menu = document.querySelector(".header .inner-menu");
    const overlay = document.querySelector(".header .inner-menu .inner-overlay");

    buttonMenuMobile.onclick = () => {
        menu.setAttribute("show", "yes");
    }

    overlay.onclick = () => {
        menu.setAttribute("show", "");
    }
}