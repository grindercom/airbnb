function click_right() {
    var box_4 = document.getElementsByClassName('const-b4-box-4');
    box_4[0].style.display = "block"
    var box_1 = document.getElementsByClassName('const-b4-box-1');
    box_1[0].style.display = "none"
    var btn_right = document.getElementsByClassName('const-b4-bs-btn-r');
    btn_right[0].style.display = "none"
    var btn_left = document.getElementsByClassName('const-b4-bs-btn-l');
    btn_left[0].style.display = "block"
}
function click_left() {
    var box_4 = document.getElementsByClassName('const-b4-box-4');
    box_4[0].style.display = "none"
    var box_1 = document.getElementsByClassName('const-b4-box-1');
    box_1[0].style.display = "block"
    var btn_right = document.getElementsByClassName('const-b4-bs-btn-r');
    btn_right[0].style.display = "block"
    var btn_left = document.getElementsByClassName('const-b4-bs-btn-l');
    btn_left[0].style.display = "none"
}
function money_box_open() {
    var fly_b4_money = document.getElementsByClassName('fly-b4-money');
    fly_b4_money[0].style.display = "block"
    var fly_b4_info_open = document.getElementsByClassName('fly-b4-info-open');
    fly_b4_info_open[0].style.display = "none"
}
function money_box_closed() {
    var fly_b4_money = document.getElementsByClassName('fly-b4-money');
    fly_b4_money[0].style.display = "none"
    var fly_b4_info_open = document.getElementsByClassName('fly-b4-info-open');
    fly_b4_info_open[0].style.display = "inline-block"
}
