$(document).ready(function () {
    $('#hi').css('transform', 'translateY(0%)')
    window.scrollTo(0, 0);
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
        let percent1 = 0
        let percent2 = 0
        let percent3 = 0
        let percent4 = 0
        let grow1 = setInterval(function () {
            $(".bar1").css("width", percent1 + "%")
            percent1 += 1
            if (percent1 > $(".bar1").attr('value')) {
                clearInterval(grow1)
            }
        }, 30)

        let grow2 = setInterval(function () {
            $(".bar2").css("width", percent2 + "%")
            percent2 += 1
            if (percent2 > $(".bar2").attr('value')) {
                clearInterval(grow2)
            }
        }, 30)


        let grow3 = setInterval(function () {

            $(".bar3").css("width", percent3 + "%")
            percent3 += 1
            if (percent3 > $(".bar3").attr('value')) {
                clearInterval(grow3)
            }
        }, 30)


        let grow4 = setInterval(function () {

            $(".bar4").css("width", percent4 + "%")
            percent4 += 1
            if (percent4 > $(".bar4").attr('value')) {
                clearInterval(grow4)
            }
        }, 30)
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