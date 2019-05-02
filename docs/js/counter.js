'use strict';
//class counter{}
//export default counter;

var counter = 0;
function count_up() {
    counter++;
    let count = document.getElementById("count");
    count.innerText = counter;
}

// URLはあくまでHTMLから見た
const img = new Array("./asset/syokki_spoon2.png");
function change_img() {
    if (counter > 0) {
        document.getElementById("spoon_img").src = img[0];
    }
}
