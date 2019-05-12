'use strict';

var counter = 0;
const result_img = new Array("./asset/desk_mashroom_increased.png", "./asset/window_ame.png", "./asset/spoon_bented_success.png");

function count_up() {
    counter++;
}

function show_result() {
    if (counter > 80) {
        // スプーン曲げ成功
        document.getElementById("spoon_img").src = result_img[2];
        document.getElementById("success_result_area").style.visibility = "visible";
        document.getElementById("success_score_area").style.visibility = "visible";
        document.getElementById("success_count").innerText = counter;
    } else if (counter > 39) {
        // きのこ
        document.getElementById("desk_img").src = result_img[0];
        document.getElementById("desk_result_area").style.visibility = "visible";
        document.getElementById("desk_score_area").style.visibility = "visible";
        document.getElementById("desk_count").innerText = counter;
    } else if (counter > 0) {
        // 雨
        document.getElementById("window_img").src = result_img[1];
        document.getElementById("window_result_area").style.visibility = "visible";
        document.getElementById("window_score_area").style.visibility = "visible";
        document.getElementById("window_count").innerText = counter;
    } else {
        // 何も起こらなかった
        document.getElementById("no_pray_result_area").style.visibility = "visible";
        document.getElementById("no_pray_score_area").style.visibility = "visible";
        document.getElementById("no_pray_count").innerText = counter;
    }
}



