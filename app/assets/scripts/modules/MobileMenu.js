class MobileMenu {
    constructor(){
        /*Select from the Dom */
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");
        this.siteHeader = document.querySelector(".site-header");
        this.events();
    }

    events() {
        /*event handling - the click - with an arrow function (otherwise event listener will manipulate the this keyword*/
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

        /*the callback function*/
    toggleTheMenu(){
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
    }


}

export default MobileMenu;