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
const result_img = new Array("./asset/desk_mashroom_increased.png", "./asset/window_ame.png", "./asset/sppon_bented_success.png");
function change_result_img() {
    if (counter > 80) {
        document.getElementById("spoon_img").src = result_img[2];
    } else if (counter > 60) {
        document.getElementById("window_img").src = result_img[1];
    } else if (counter > 1) {
        document.getElementById("desk_img").src = result_img[0];
    }
}




