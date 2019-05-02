'use strict';

function start_timer() {
    //これではhiddenにならぬ
    //document.getElementById("score").style.visibility = "hidden";
    setTimeout('show_result()', 3000);
    // TODO:リセットボタンを付けたときはclearTimeoutをする
}

function show_result() {
    //import img_change from './counter.js';

    // クリックをきかなくする
    var psychic_counter = document.getElementById("psychic_counter");
    psychic_counter.disabled = "disabled";

    // 画像切り替え
    change_img();

    // スコア表示
    document.getElementById("score_area").style.visibility = "visible";
}