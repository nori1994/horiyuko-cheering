'use strict';

var counter_timer;
const pray_img = new Array("./asset/spoon_bented_right.png", "./asset/spoon_bented_left.png", "./asset/spoon.png");

function count_stop() {
    // カウンター無効化
    var psychic_counter = document.getElementById("psychic_counter");
    psychic_counter.disabled = true;

    // 結果表示
    document.getElementById("spoon_img").src = pray_img[2];
    show_result();
}

function count_start() {
    // カウンター有効化
    var psychic_counter = document.getElementById("psychic_counter");
    psychic_counter.style.visibility = "visible";
    psychic_counter.disabled = false;

    // スタートボタン非表示
    document.getElementById("count_down").style.display = "none";

    counter_timer = setInterval(count_down, 1000);

    setTimeout(count_stop, 10000);
}

function count_down(time_limmit) {
    var time = document.getElementById("time");
    var time_limmit = parseInt(time.innerText);

    if (time_limmit <= 0) {
        time.innerText = 0;
        clearInterval(counter_timer);
    } else {
        time.innerText = time_limmit - 1;
        change_pray_img();
    }
}

function change_pray_img() {
    var time = document.getElementById("time");
    var time_limmit = parseInt(time.innerText);

    if (time_limmit % 2 == 0) {
        document.getElementById("spoon_img").src = pray_img[0];
    } else {
        document.getElementById("spoon_img").src = pray_img[1];
    }
}