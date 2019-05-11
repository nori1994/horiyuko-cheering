'use strict';

function start_timer(time) {
    //これではhiddenにならぬ
    //document.getElementById("score").style.visibility = "hidden";
    setTimeout(show_result, time);
    // TODO:リセットボタンを付けたときはclearTimeoutをする
}

function show_result() {
    //import img_change from './counter.js';

    // カウンター無効化
    var psychic_counter = document.getElementById("psychic_counter");
    psychic_counter.disabled = true;

    // 画像切り替え
    change_img();

    // スコア表示
    document.getElementById("score_area").style.visibility = "visible";
}

function count_start() {
    // カウンター有効化
    var psychic_counter = document.getElementById("psychic_counter");
    psychic_counter.disabled = false;

    // スタートボタン非表示
    document.getElementById("count_down").style.visibility = "hidden";

    setInterval(count_down, 1000);

    //これではhiddenにならぬ
    //document.getElementById("score").style.visibility = "hidden";
    setTimeout(show_result, 10000);
    // TODO:リセットボタンを付けたときはclearTimeoutをする
}

function count_down(time_limmit) {
    var time = document.getElementById("time");
    var time_limmit = parseInt(time.innerText);

    if (time_limmit <= 0) {
        time.innerText = 0;
    } else {
        time.innerText = time_limmit - 1;
    }
}
