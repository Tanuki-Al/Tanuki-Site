import '../styles/styles.css'
import 'lazysizes'
import StickyHeader from './modules/StickyHeader'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".events"), 60);

new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault(); 
        if(typeof modal =="undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("There was a problem"));
        } else {
            modal.openTheModal();
        } })
})


if(module.hot) {
    module.hot.accept()
}





/* Javscript Notes 
import Member from './modules/Member'

class goldMember extends Member {
    specialDeal(){
        console.log(this.name + " Did you know we have special deals on this week")
    }
}


let alan = new goldMember("Alan Cracknell", "Sekigahara");
alan.greet();
let dom = new Member("Dominic Weir", "Bingo");
dom.greet();
alan.specialDeal();
*/