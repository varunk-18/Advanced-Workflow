//----------------------light-dark-theme-js-start--------------
$(".theme_icon_dark").click(function () {
    $(this).addClass('active');
    $('.theme_icon_light').removeClass('active');
    $("html").addClass("dark").removeClass("light");
    localStorage.setItem("theme", "dark");
});
$(".theme_icon_light").click(function () {
    $(this).addClass('active');
    $('.theme_icon_dark').removeClass('active');
    $("html").addClass("light").removeClass("dark");
    localStorage.setItem("theme", "light");
});
// On page load - apply saved theme
$(document).ready(function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        $("html").addClass("dark").removeClass("light");
        $('.theme_icon_dark').addClass('active');
        $('.theme_icon_light').removeClass('active');
    } else if (savedTheme === "light") {
        $("html").addClass("light").removeClass("dark");
        $('.theme_icon_light').addClass('active');
        $('.theme_icon_dark').removeClass('active');
    }
});
//-------------------------light-dark-theme-js-end---------------

//-------------------------multistep-form-js-start-----------------
$(document).ready(function () {
    var current_fs, next_fs, previous_fs;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    setProgressBar(current);
    $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = current_fs.next();
        let nextIndex = $("fieldset").index(next_fs);
        // Remove old classes
        $("#progressbar li").removeClass("active pre-active");
        // Previous completed steps
        $("#progressbar li").each(function (index) {
            if (index < nextIndex) {
                $(this).addClass("pre-active");
            }
            if (index === nextIndex) {
                $(this).addClass("active");
            }
        });
        next_fs.css("display", "flex");
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });
    $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = current_fs.prev();
        let prevIndex = $("fieldset").index(previous_fs);
        $("#progressbar li").removeClass("active pre-active");
        $("#progressbar li").each(function (index) {
            if (index < prevIndex) {
                $(this).addClass("pre-active");
            }
            if (index === prevIndex) {
                $(this).addClass("active");
            }
        });
        previous_fs.css("display", "flex");
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });
    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
    }
});
//-------------------------multistep-form-js-start-----------------

//-------------------------toggle-btn-js-start-----------------------

$(".toggle_btn").click(function () {
    $(this).toggleClass('active');
    $(".aside_wrapper").toggleClass("hide_wrapper");
    $(".main_wrapper").toggleClass("full_wrapper");
    $("html").toggleClass("myClass");
    $(".body_overloay").toggleClass("show");
});
$(".toggler_btn").click(function () {
    $(".toggle_btn").trigger("click");
});
$(".body_overloay").click(function () {
    $(".toggle_btn").trigger("click");
});
//--------------------------toggle-btn-js-end------------------------