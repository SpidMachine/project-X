$(function () {
    $('.minimized').click(function (event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function (event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function () {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});

$(document).ready(function () {
    const navOffset = $("#nav").offset().top;

    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();

        if (scrolled > navOffset) {
            $("#wrapper").addClass("nav-fixed");
        } else if (scrolled < navOffset) {
            $("#wrapper").removeClass("nav-fixed");
        }
    })
})




$(function () {
    if ($('.dropMoreInfo1').length) {
        blok_height = Number($('.dropMoreInfo1').css('height').replace('px', ''));

        if (blok_height > 245) {
            $('.dropMoreInfo1').css('max-height', '245px');
            $('.read-nextFrs').show();
        }
    }
});

$('.read-nextFrs').live('click', function () {

    if ($('.dropMoreInfo1').css('max-height') !== 'none') {
        $('.dropMoreInfo1').css('max-height', '');
        $(this).text('Скрыть');
    } else {
        $('.dropMoreInfo1').css('max-height', '245px');
        $(this).text('Читать далее...');
    }

    return false;
});




$(function () {
    if ($('.dropMoreInfo2').length) {
        blok_height = Number($('.dropMoreInfo2').css('height').replace('px', ''));

        if (blok_height > 250) {
            $('.dropMoreInfo2').css('max-height', '250px');
            $('.read-nextSec').show();
        }
    }
});

$('.read-nextSec').live('click', function () {

    if ($('.dropMoreInfo2').css('max-height') !== 'none') {
        $('.dropMoreInfo2').css('max-height', '');
        $(this).text('Скрыть');
    } else {
        $('.dropMoreInfo2').css('max-height', '250px');
        $(this).text('Читать далее...');
    }

    return false;
});




$(function () {
    if ($('.dropMoreInfo3').length) {
        blok_height = Number($('.dropMoreInfo3').css('height').replace('px', ''));

        if (blok_height > 233) {
            $('.dropMoreInfo3').css('max-height', '233px');
            $('.read-nextThr').show();
        }
    }
});

$('.read-nextThr').live('click', function () {

    if ($('.dropMoreInfo3').css('max-height') !== 'none') {
        $('.dropMoreInfo3').css('max-height', '');
        $(this).text('Скрыть');
    } else {
        $('.dropMoreInfo3').css('max-height', '233px');
        $(this).text('Читать далее...');
    }

    return false;
});


$(function () {
    if ($('.dropMoreInfo4').length) {
        blok_height = Number($('.dropMoreInfo4').css('height').replace('px', ''));

        if (blok_height > 233) {
            $('.dropMoreInfo4').css('max-height', '233px');
            $('.read-nextFrth').show();
        }
    }
});

$('.read-next').live('click', function () {

    if ($('.dropMoreInfo4').css('max-height') !== 'none') {
        $('.dropMoreInfo4').css('max-height', '');
        $(this).text('Скрыть');
    } else {
        $('.dropMoreInfo4').css('max-height', '233px');
        $(this).text('Читать далее...');
    }

    return false;
});