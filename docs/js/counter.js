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
    if (counter > 2) {
        document.getElementById("spoon_img").src = result_img[2];
        document.getElementById("success_result_area").style.visibility = "visible";
        document.getElementById("success_score_area").style.visibility = "visible";
        document.getElementById("success_count").innerText = counter;
    } else if (counter > 1) {
        document.getElementById("desk_img").src = result_img[0];
        document.getElementById("desk_result_area").style.visibility = "visible";
        document.getElementById("desk_score_area").style.visibility = "visible";
        document.getElementById("desk_count").innerText = counter;
    } else if (counter > 0) {
        document.getElementById("window_img").src = result_img[1];
        document.getElementById("window_result_area").style.visibility = "visible";
        document.getElementById("window_score_area").style.visibility = "visible";
        document.getElementById("window_count").innerText = counter;
    } else {
        document.getElementById("no_pray_result_area").style.visibility = "visible";
        document.getElementById("no_pray_score_area").style.visibility = "visible";
        document.getElementById("no_pray_count").innerText = counter;
    }
}

function create_dialog() {
    // ------------------------------------------------------------
    // カスタムダイアログを使用する
    // ------------------------------------------------------------
    // カスタムダイアログを生成
    var custom_dialog = new CustomDialog();

    // 幅を設定する
    custom_dialog.setWidth(500);

    // メッセージを設定
    custom_dialog.setMessage("aaa");

    // エレメントを取得
    var element_body = custom_dialog.getElement();


    // ------------------------------------------------------------
    // HTML 文字列を指定して、DOM オブジェクトをまとめて構築する
    // ------------------------------------------------------------
    element_body.innerHTML = '' +
        '<table style="width:100%">' +
        '	<tr><td style="width:100px; text-align:right;">引数：</td><td><input id="custom_dialog_input_argument" value="" style="width:100%" disabled></td></tr>' +
        '	<tr><td style="width:100px; text-align:right;">戻り値：</td><td><input id="custom_dialog_input_return" value="" style="width:100%"></td></tr>' +
        '</table>';

    // ID 属性が "custom_dialog_input_argument" であるエレメントを取得
    var custom_dialog_input_argument = document.getElementById("custom_dialog_input_argument");

    // ID 属性が "custom_dialog_input_return" であるエレメントを取得
    var custom_dialog_input_return = document.getElementById("custom_dialog_input_return");

    // カスタムダイアログのコントロールに値をセット
    custom_dialog_input_argument.value = input_argument.value;
    custom_dialog_input_return.value = "返信テスト";


    // ------------------------------------------------------------
    // 終了時に実行されるイベント
    // ------------------------------------------------------------
    custom_dialog.onclose = function () {

        // カスタムダイアログのコントロールから値を取得
        input_return.value = custom_dialog_input_return.value;
    };

}



