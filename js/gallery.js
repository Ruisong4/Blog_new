$(document).ready(function(){
    $.ajax({
        method: "POST",
        url: "./php/load_picture.php",
        dataType: "json",
        success : function (result) {
            for (let i = 2; i < result.length; i++) {
                let img = document.createElement("img");
                let container = document.createElement("div");
                let des = document.createElement("div");
                des.className = "description";
                container.className = "container";
                container.append(img);
                container.append(des);
                des.innerHTML = result[i]["time"] + ": " + result[i]["content"];
                img.setAttribute("data-lazy", "resources/img/gallery_images/" + result[i]["path"]);
                img.className = "imageItem";
                document.getElementsByClassName("carousel_container")[0].append(container);
            }

            if (window.innerWidth < 600) {
                $('.carousel_container').slick({
                    lazyLoad: 'ondemand',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed : 600,
                    prevArrow: false,
                    nextArrow: false
                });
            } else {
                $('.carousel_container').slick({
                    lazyLoad: 'ondemand',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed : 600,
                });
            }

        }
    });



});