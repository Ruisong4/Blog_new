window.onload = function () {
    let top_nav_state = 0;
    $(".top_nav_item:first-child").click(function () {
        if (top_nav_state == 0) {
            $(".top_nav_item").css("display","block");
            $("#mask").css("display","block");
            $(".up").css("display","inline-block");
            $(".down").css("display","none");
            top_nav_state = 1;
        } else {
            $(".top_nav_item:not(:first-child)").css("display","none");
            $("#mask").css("display","none");
            $(".up").css("display","none");
            $(".down").css("display","inline-block");
            top_nav_state = 0;
        }
    });
};

