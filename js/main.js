$(document).ready(function() {
    // let mainBox = $(".item")

    // for (let i = 0; i < mainBox.length; i++) {
    //     mainBox[i].addEventListener("click", function() {
    //        
    //     })
    // }

    $(".left-box").click(function() {
        $(this).addClass("left-select").siblings().css({ display: "none" })
    })
    $(".mid-box").click(function() {
        $(this).addClass("mid-select").siblings().css({ display: "none" })
    })
    $(".right-box").click(function() {
        $(this).addClass("right-select").siblings().css({ display: "none" })
    })

    $(".item").mouseover(function() {
        $(this).css({ width: "calc(100% / 3 + 60px)" })
    })
    $(".item").mouseout(function() {
        $(this).css({ width: "calc(100% / 3 + 0px)" })
    })

    $(".left-box").mouseover(function() {
        $(".mid-box").css({ left: "calc(50% + 60px)" })
        $(".right-box").css({ width: "calc(100% / 3 - 30px)" })
    })
    $(".left-box").mouseout(function() {
        $(".mid-box").css({ left: "50%" })
        $(".right-box").css({ width: "calc(100% / 3 - 0px)" })
    })

    $(".mid-box").mouseover(function() {
        $(".right-box").css({ width: "calc(100% / 3 - 30px)" })
    })
    $(".mid-box").mouseout(function() {
        $(".right-box").css({ width: "calc(100% / 3 - 0px)" })
    })

    $(".right-box").mouseover(function() {
        $(".left-box").css({ width: "calc(100% / 3 - 30px)" })
        $(".mid-box").css({ left: "calc(50% - 30px)" })
    })
    $(".right-box").mouseout(function() {
        $(".left-box").css({ width: "calc(100% / 3 - 0px)" })
        $(".mid-box").css({ left: "calc(50% - 0px)" })
    })
})