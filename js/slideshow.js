"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");

    //start slideshow
    setInterval( () => {
        $("#slide").fadeOut(1000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }

                const nextSlideSource = nextSlide.attr("src");
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
            });            
    },
    3000);

});