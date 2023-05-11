"use strict";
document.addEventListener("DOMContentLoaded", () => {

  $("#register").click( evt => {
    let isValid = true;

    const email = $("#email_1").val().trim();
    if (email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
      isValid = false;
      $("#email_1").next().text("Please enter a valid email.");
      isValid = false;
    }
    else{
      $("#email_1").next().text("");
    }
    $("#email_1").val(email);

    const firstName = $("#first_name").val().trim();
    if (firstName == "") {
      $("#first_name").next().text("This field is required.");
      isValid = false;
    } else {
      $("#first_name").next().text("");
    }
    $("#first_name").val(firstName);

    const lastName = $("#last_name").val();
    if (lastName == "") {
      $("#last_name").next().text("This field is required.");
      isValid = false;
    } else {
      $("#last_name").next().text("");
    }
    $("#last_name").val(lastName);

    const phone = $("#phone").val();
    if (phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
      isValid = false;
      $("#phone").next().text("Please enter a valid phone number.");
      isValid = false;
    }
    else{
      $("#phone").next().text("");
    }
    $("#phone").val(phone);

    const terms = $("#terms").val();
       if (terms.checked == false) {
      $("#terms").next().text("You must agree to the terms of service."); 
    }

    const comments = $("#comments").val().trim();
    if (comments == "") {
      $("#comments").next().text("This field is required.");
      isValid = false;
    } else {
      $("#comments").next().text("");
    }
    $("#comments").val(comments);

    if (!isValid) {
      evt.preventDefault();
    }
    $("#email_1").focus();
  });

});

const resetForm = () => {
  $("form").reset();
  
  // remove error messages
  $(text).remove();
  
  $("#email_1").focus();
};






// const $ = selector => document.querySelector(selector);

// const displayErrorMsgs = msgs => {
//   // create a new ul element
//   const ul = document.createElement("ul");
//   ul.id = "errorMsgs"; //made new ID for ul
//   ul.classList.add("messages");

//   // create a new li element for each error message, add to ul
//   for (let msg of msgs) {
//       const li = document.createElement("li");
//       const text = document.createTextNode(msg);
//       li.appendChild(text);
//       ul.appendChild(li);
//   }

//   // if ul node isn't in document yet, add it
//   const node = $("#errorMsg");  
//       // get the form element 
//       const form = $("form");

//       if (node == null) {
//       // add ul to parent of form, before the form
//       form.parentNode.insertBefore(ul, form);
//   } else {
//       // replace existing ul node
//       node.parentNode.replaceChild(ul, node);
//   }  
//   //help with repeating and replacing nav bar!!!!
// }

// const processEntries = () => {
//   // get form controls to check for validity
//   const email1 = $("#email_1");
//   const email2 = $("#email_2");
//   const firstName = $("#first_name");
//   const phone = $("#phone");
//   const country = $("#country");
//   const terms = $("#terms");
//   const comments = $("#comments");

//   // create array for error messages
//   const msgs = [];

//   // check user entries for validity
//   if (email1.value == "") {
//     msgs[msgs.length] = "Please enter an email address."; 
// } 
// if (email1.value != email2.value) {
//     msgs[msgs.length] = "Please make sure emails match."; 
// } 
// if (phone.value == "") {
//     msgs[msgs.length] = "Please enter a mobile phone number."; 
// } 
//   if (first_name.value == "") {
//       msgs[msgs.length] = "Please enter your first name."; 
//   } 
//   if (last_name.value == "") {
//     msgs[msgs.length] = "Please enter your last name."; 
// } 
  
//   if (country.value == "") {
//       msgs[msgs.length] = "Please select a country.";
//   } 
//   if (terms.checked == false) {
//       msgs[msgs.length] = "You must agree to the terms of service."; 
//   }
//   if (comments.value == "") {
//       msgs[msgs.length] = "Please enter a comment.";
//   }

//   // submit the form or notify user of errors
//   if (msgs.length == 0) {  // no error messages
//       $("form").submit(); 
//   } else {
//       displayErrorMsgs(msgs);

//   }
// };

// const resetForm = () => {
//   $("form").reset();
  
//   // remove error messages
//   $("ul").remove();
  
//   $("#email_address").focus();
// };

// document.addEventListener("DOMContentLoaded", () => {
//   $("#register").addEventListener("click", processEntries);
//   $("#reset_form").addEventListener("click", resetForm);  
//   $("#email_address").focus();   
// });


