"use strict";

$(document).ready( () => {

    //attach handlers for all h2 tags
    $("#faqs h2").click( evt => {

        //get clicked h2 tag
        const h2 = evt.currentTarget;

        //toggle minus class for h2
        $(h2).toggleClass("minus");

        //show or hide related divs
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
            $(h2).next().show();
        }

        evt.preventDefault();
    });//end click

    //set focus to h2 tag's <a> tag
    $("#faqs").find("a:first").focus();

});//end function







// // the event handler for the click event of each <a> element
// const toggle = evt => {
//     const aElement = evt.currentTarget;                 // get the clicked <a> element
//     const h2Element = aElement.parentNode; // get the next h2 element after
//     const divElement = h2Element.nextElementSibling;     // get h2's sibling div

//     // h2Element.classList.toggle("minus");
//     if (h2Element.hasAttribute("class")) {
//         h2Element.removeAttribute("class");
//     }
//     else {
//         h2Element.className = "minus";
//     }
//     // divElement.classList.toggle("open");
//     if (divElement.hasAttribute("class")) {
//         divElement.removeAttribute("class");
//     }
//     else {
//         divElement.className = "open";
//     }

//     evt.preventDefault();   // cancel default action of <a> tag
// };

// document.addEventListener("DOMContentLoaded", () => {
//     // get the <a> tags
//     const aElements = faqs.querySelectorAll("#faqs a");
    
//     // attach event handler for each <a> tag	    
//     for (let aElement of aElements) {
//         aElement.addEventListener("click", toggle);
//     }
//     // set focus on <a> tag
//     aElements[0].focus();       
// });