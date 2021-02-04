$(document).ready(function() {
    // let mainBox = $(".item")

    // for (let i = 0; i < mainBox.length; i++) {
    //     mainBox[i].addEventListener("click", function() {
    //        
    //     })
    // }

    $(".left-box").click(function() {
        $(this).addClass("left-select").siblings().css({ display: "none" });
    })
    $(".mid-box").click(function() {
        $(this).addClass("mid-select").siblings().css({ display: "none" });
    })
    $(".right-box").click(function() {
        $(this).addClass("right-select").siblings().css({ display: "none" });
    })

    $(".item").mouseover(function() {
        $(this).css({ width: "calc(100% / 3 + 60px)" });
    })
    $(".item").mouseout(function() {
        $(this).css({ width: "calc(100% / 3 + 0px)" });
    })

    $(".left-box").mouseover(function() {
        $(".mid-box").css({ left: "calc(50% + 60px)" });
        $(".right-box").css({ width: "calc(100% / 3 - 30px)" });
    })
    $(".left-box").mouseout(function() {
        $(".mid-box").css({ left: "50%" });
        $(".right-box").css({ width: "calc(100% / 3 - 0px)" });
    })

    $(".mid-box").mouseover(function() {
        $(".right-box").css({ width: "calc(100% / 3 - 30px)" });
    })
    $(".mid-box").mouseout(function() {
        $(".right-box").css({ width: "calc(100% / 3 - 0px)" });
    })

    $(".right-box").mouseover(function() {
        $(".left-box").css({ width: "calc(100% / 3 - 30px)" });
        $(".mid-box").css({ left: "calc(50% - 30px)" });
    })
    $(".right-box").mouseout(function() {
        $(".left-box").css({ width: "calc(100% / 3 - 0px)" });
        $(".mid-box").css({ left: "calc(50% - 0px)" });
    })

    $("#search").on("keyup keydown", function() {
        if ($(this).val().length > 0) {
            $(".search-text").hide();
        } else {
            $(".search-text").show();
        }
    });

    let insMenu = $("#insurance-menu")
    $(".hburger-icon").click(function() {
        $(".menu-icon").css({ background: "rgba(0, 0, 0, .2)" });
        $("#insurance-menu").addClass("menu-active");
        $(".hburger-icon").css({ transform: "scale(0)" });
        $(".close-icon").css({ transform: "scale(1)" });
        // $(".insurance-menu a").addClass("active-color");
        if (insMenu.hasClass("menu-active")) {
            $(".business-menu").click(function() {
                // $(".insurance-menu a").removeClass("active-color");
                // $(".business-menu a").addClass("active-color");
            })
            $(".insurance-menu").click(function() {
                // $(".insurance-menu a").addClass("active-color");
                // $(".business-menu a").removeClass("active-color");
            })
            $(".business-menu").click(function() {
                $(".corporative-insurance").fadeIn(1000).show();
                $(".cats-item").fadeOut(1000).hide();
                $("#insurance-menu").css({ background: "#374254" })
            });
            $(".insurance-menu").click(function() {
                $(".cats-item").fadeIn(1000).show();
                $(".corporative-insurance").fadeOut(1000).hide();
                $("#insurance-menu").css({ background: "#0094c9" });
            })
        }
    });
    $(".close-icon").click(function() {
        $(".menu-icon").css({ background: "transparent" });
        $("#insurance-menu").removeClass("menu-active");
        $(".hburger-icon").css({ transform: "scale(1)" });
        $(".close-icon").css({ transform: "scale(0)" });
        // $(".insurance-menu a").removeClass("active-color");
    })
    let businessMenu = $(".business-menu");
    $(".business-menu").click(function() {
        $("#business-section").addClass("business-active");
        $(".insurance-menu a").removeClass("active");
        $(".business-menu a").addClass("active");
        if ($(".business-menu a").hasClass("active")) {
            $(".corporative-insurance").fadeIn(1000).show();
            $(".cats-item").fadeOut(1000).hide();
            $("#insurance-menu").css({ background: "#374254" })
            $(".hburger-icon").click(function() {
                $("#insurance-menu").addClass("menu-active");
            })
        }
    })
    $(".insurance-menu").click(function() {
        $("#business-section").removeClass("business-active");
        $(".business-menu a").removeClass("active");
        $(".insurance-menu a").addClass("active");
    });

    $(".title").click(function() {
        if (!$(".payment-menu").hasClass("show")) {
            $(".payment-menu").addClass("show");
        } else {
            $(".payment-menu").removeClass("show");
        }
    })

    $(".close-menu").click(function() {
        $(".payment-menu").removeClass("show");
    })

    let menuItem = $(".menu-item");
    let dropMenu = $(".dropdown_menu");

    for (i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener("click", function() {

        })
    }

    $(".menu-item-parent").click(function() {
        $(this).siblings().find(".sub-menu").slideUp();
        $(this).find(".sub-menu").slideToggle();
    })
});