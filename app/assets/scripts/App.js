import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'



new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".events"), 60);


let mobileMenu = new MobileMenu();

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