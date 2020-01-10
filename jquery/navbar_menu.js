var icon2 = document.querySelector('#nav-icon2')
var first_li_hasclass = false
var second_li_hasclass = false

// 控制漢堡條的長相
icon2.onclick = function () {
    icon2.classList.toggle('open')
}
// ------跑出來的選單動作 start------
$("#nav-icon2").click(function () {
    $("#menu5").toggleClass("open");
    setTimeout(() => {
        $("#menu5").toggleClass("active");
    }, 100);

});

$("#first_li").click(function () {
    if (!first_li_hasclass) {
        first_li_hasclass = true
        $("#first_li").addClass('open')
        $("#second_ul").animate({ height: 'toggle' }, 70);
    }
});
// ------跑出來的選單動作 end------
$("#second_li1").click(function () {
    $("#third_ul1").animate({ height: 'toggle' }, 70);
});
$("#second_li2").click(function () {
    $("#third_ul2").animate({ height: 'toggle' }, 70);
});
$("#second_li3").click(function () {
    $("#third_ul3").animate({ height: 'toggle' }, 70);
});
$("#second_li4").click(function () {
    $("#third_ul4").animate({ height: 'toggle' }, 70);
});
$("#second_li6").click(function () {
    $("#third_ul6").animate({ height: 'toggle' }, 70);
});