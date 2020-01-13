var timer;
var count = 0;
var w = $('.load_line').width()
var h = $('.load_line').offset().top - 100
var l = -20
var cut;
// -20 ~  w - 78
// w - 78 總共移動距離   (w - 78 +20 ) / 100
var move
var oldcount = -200;

console.log(w);

if (w == 423) {
    cut = 19
} else if (w == 358) {
    cut = 21
} else if (w == 318) {
    cut = 25
}
function load() {

    $('#loadpages').css('opacity', '1')
    var time = Math.floor(Math.random() * 40) + 1
    move = ((w - 78) / 100) * count


    $('#load_line_content').css('width', count + "%");
    $('#load_line_txt').text(count + '%')

    oldcount = oldcount + (count * 4) - 20

    $('#bee_img').css('left', count - cut + '%')



    timer = setTimeout(load, time)
    if (count == 100) {
        clearTimeout(timer)
        $('.loadpages').css('opacity', 0)
        $('#homepage').css('opacity', '1')
        $('#main').css('opacity', '1')
        setTimeout(() => { $('#loadpages').css('display', 'none') }, 200)
    }
    oldcount = -200;
    count++
}

  load()

// if (sessionStorage.getItem("hasrun") == null) {
//     load()
//     sessionStorage.setItem("hasrun", "跑過了");

// } else {
//     $('#homepage').css('opacity', '1')
//     $('#main').css('opacity', '1')
//     setTimeout(() => { $('#loadpages').css('display', 'none') }, 200)
// }
