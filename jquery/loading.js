var timer;
var count = 0;
var w = $('.load_line').width()
var oldcount = -200;

// sessionStorage.setItem("hasrun", "false");


function load() {
    var time = Math.floor(Math.random() * 40) + 1
    $('#load_line_content').css('width', count + "%");
    $('#load_line_txt').text(count + '%')
    oldcount = oldcount + (count * 4) - 20
    $('#bee_img').css({
        transform: 'translate(' + oldcount + 'px, 0)'
    });
    timer = setTimeout(load, time)
    if (count == 100) {
        clearTimeout(timer)
        $('.loadpages').css('opacity', 0)
        setTimeout(() => { $('#loadpages').css('display', 'none') }, 200)
    }
    oldcount = -200;
    count++
}



if (sessionStorage.getItem("hasrun") == null) {
    load()
    sessionStorage.setItem("hasrun", "跑過了");

} else {

    setTimeout(() => { $('#loadpages').css('display', 'none') }, 200)
}
