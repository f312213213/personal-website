$(document).ready(function () {
    const cover1 = $('.cover1')
    const cover2 = $('.cover2')
    const cover3 = $('.cover3')
    const header = $('header')
    const outside = $('.outside')
    const hi = $('.wrapper')
    const timeLine = new TimelineMax()
    timeLine.fromTo(cover1, 0.3, {width: '100%'}, {width: '0%'})
        .fromTo(cover2, 0.3, {width: '100%'}, {width: '0%'})
        .fromTo(cover3, 0.3, {width: '100%'}, {width: '0%'})
        .fromTo(header,0.5, {x: '-100%'}, {x: '0%'})
        .fromTo(hi, 2, {y: '150%'}, {y: '0%'})
        .fromTo(outside, 2, {y: '250%'}, {y: '0%'},"-=2" )
})




$('.burger').click(() => {
    $('nav').toggleClass('nav-active')
    $('.burger').toggleClass('Click')
})
$('.nav_links li').click(() => {
    $('nav').toggleClass('nav-active')
    $('.burger').toggleClass('Click')
})

$('.hi').click((event) => {
    event.preventDefault()
    $('html,body').animate({scrollTop: $('#hi').offset().top}, 50)
})

$('.about').click((event) => {
    event.preventDefault()
    $('html,body').animate({scrollTop: $('#about').offset().top}, 50)
})

$('.skill').click((event) => {
    event.preventDefault()
    $('html,body').animate({scrollTop: $('#skill').offset().top}, 50)
})

$('.cta').click((event) => {
    event.preventDefault()
    $('html,body').animate({scrollTop: $('#contact').offset().top}, 50)
})



var waypoint = new Waypoint({
    element: document.getElementById('details'),
    handler: (function () {
        const bar1 = $('.bar1')
        const bar2 = $('.bar2')
        const bar3 = $('.bar3')
        const bar4 = $('.bar4')
        const bar1Value = bar1.attr('value')
        const bar2Value = bar2.attr('value')
        const bar3Value = bar3.attr('value')
        const bar4Value = bar4.attr('value')
        const timeLine = new TimelineMax()
        timeLine.fromTo(bar1, 2, {width: '0%'}, {width: bar1Value+"%"})
            .fromTo(bar2, 2, {width: '0%'}, {width: bar2Value+"%"}, "-=1.5")
            .fromTo(bar3, 2, {width: '0%'}, {width: bar3Value+"%"}, "-=1.5")
            .fromTo(bar4, 2, {width: '0%'}, {width: bar4Value+"%"}, "-=1.5")

    })
})

$("#getform").submit(function (evt) {
    console.log("click")
    evt.preventDefault()
    const serializedData = $(this).serialize();
    $.ajax({
        type: "POST",
        url: '/',
        data: serializedData,
        success: function (response) {
            $("#feedback").text("Hi " + response.name + ", thanks for your message!")
            $('#getform').trigger("reset");
        },
        error: function (response) {
            $("#feedback").text("Sorry, I have some trouble to receive your message now, please try later.")
        }
    })
})