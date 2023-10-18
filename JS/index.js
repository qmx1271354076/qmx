var left = 0;
var timer;
run();
function run() {
    if (left <= -3200) {
        left = 0;
    }
    imglist.style.marginLeft = left + 'px';
    var n = (left % 900 == 0) ? n = 1200 : n = 10;
    left -= 10;
    timer = setTimeout(run, n);
}