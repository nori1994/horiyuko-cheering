'use strict';
//class counter{}
//export default counter;

var counter = 0;
function count_up() {
    counter++;
    //document.getElementById("count").innerText = counter;
}

// URLはあくまでHTMLから見た
const result_img = new Array("./asset/desk_mashroom_increased.png", "./asset/window_ame.png", "./asset/spoon_bented_success.png");
function change_result_img() {
    if (counter > 60) {
        document.getElementById("spoon_img").src = result_img[2];
        document.getElementById("success_result_area").style.visibility = "visible";
        document.getElementById("success_score_area").style.visibility = "visible";
        document.getElementById("success_count").innerText = counter;
    } else if (counter > 30) {
        document.getElementById("window_img").src = result_img[1];
        document.getElementById("window_result_area").style.visibility = "visible";
        document.getElementById("window_score_area").style.visibility = "visible";
        document.getElementById("window_count").innerText = counter;
    } else if (counter > 0) {
        document.getElementById("desk_img").src = result_img[0];
        document.getElementById("desk_result_area").style.visibility = "visible";
        document.getElementById("desk_score_area").style.visibility = "visible";
        document.getElementById("desk_count").innerText = counter;
    } else {
        document.getElementById("no_pray_result_area").style.visibility = "visible";
        document.getElementById("no_pray_score_area").style.visibility = "visible";
        document.getElementById("no_pray_count").innerText = counter;
    }
}



