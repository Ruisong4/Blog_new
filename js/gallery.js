$(document).ready(function(){
    $.ajax({
        method: "POST",
        url: "./php/load_picture.php",
        dataType: "json",
        success : function (result) {
            for (let i = 2; i < result.length; i++) {
                alert(result[i])
            }
        }
    });

    $('.your-class').slick();
});