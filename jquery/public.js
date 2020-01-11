
// -------------------navbar under line---------------------------------

var menu1_li = document.querySelectorAll('.menu1 > li')
var path;
for (let i = 0; i < menu1_li.length; i++) {
    const element = menu1_li[i];
    element.onmouseover = function () {
        move_line(i)
    }
    element.onmouseleave = function () {
        move_line(path)
    }

}
console.log(location.pathname);

(function () {
    switch (location.pathname) {
        case '/':
            path = 3
            move_line(path)
            break
        case '/index.html':
            path = 3
            move_line(path)
            break
        case '/news.html':
            path = 3
            move_line(path)
            break
        case '/introduction.html':
            path = 0
            move_line(path)
            break
        case '/scene.html':
            path = 1
            move_line(path)
            break
        case '/series.html':
            path = 2
            move_line(path)
            break
        case '/classes.html':
            console.log('???');

            path = 4
            move_line(path)
            break
        case '/buy.html':
            path = 5
            move_line(path)
            break
        case '/connection.html':
            path = 6
            move_line(path)
            break
    }

})()
// function first_move(num) {
//     var menu1_li_width = menu1_li[num].offsetWidth
//     var menu1_li_left = menu1_li[num].offsetLeft 
//     $('#menu_line').css('width', menu1_li_width + 'px')
//     $('#menu_line').css('left', menu1_li_left + 'px')
// }
function move_line(num) {
    var menu1_li_width = menu1_li[num].offsetWidth
    var menu1_li_left = menu1_li[num].offsetLeft
    $('#menu_line').css('width', menu1_li_width + 'px')
    $('#menu_line').css('left', menu1_li_left + 'px')
}


window.onresize = function(){
    move_line(path)
}

// -------------------navbar under line---------------------------------
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#fixed_icon").css('display', 'block')
        } else if ($(window).scrollTop() < 100) {
            $("#fixed_icon").css('display', 'none')
        }
    });
});

$("#gototop").mousedown(function () {
    $("#img1").removeClass('active')
    $("#img2").addClass('active')

});
$("#gototop").on({
    'touchstart': function () {
        $("#img1").removeClass('active')
        $("#img2").addClass('active')
    }
});
$("#gototop").mouseup(function () {
    $("#img1").addClass('active')
    $("#img2").removeClass('active')
    $(window).scrollTop('0')
});
$("#gototop").on({
    'touchend': function () {
        $("#img1").addClass('active')
        $("#img2").removeClass('active')
        $(window).scrollTop('0')
    }
});


// -------------------gototop  end---------------------------------