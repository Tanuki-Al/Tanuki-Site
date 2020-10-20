class Modal {
    constructor() {
        this.injectHTML();
        this.modal = document.querySelector(".modal");
        this.closeIcon = document.querySelector(".modal__close");
   
        this.events();
    }

    events() {

        //listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal());
        //pushes any key
        document.addEventListener("keyup", e => this.keyPressHandler(e));


    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeTheModal();
        }

    }

    openTheModal() {
      
        this.modal.classList.add("modal--is-visible");

    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible");

    }


    injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--dark section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will soon be updating the website to show our full library and stock and allow you to buy online and pick-up games instore. We will also be adding more event and community information. Until then, connect with us on any of the platforms below!</p>
      </div>

      <div class="social-icons">
        
        <a href="https://www.instagram.com/tanukigaminguk/" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="https://www.twitter.com/TanukiGamingUK/" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
    `)

}

}

export default Modal