"use strict";
document.addEventListener("DOMContentLoaded", () => {
  
  $("#best_day").datepicker({
    minDate: 0,
    maxDate: "+3M",
    showbuttonPanel: true
  });
});