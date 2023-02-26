// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateEl = $('#currentDay');
var save = window.localStorage;
var container = $(".container-fluid")
var hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
console.log(hours);
var day = dayjs().format('ddd, MMM D');
dateEl.text(day);
var time = dayjs().format('H');
console.log(time)

function createTimeBlocks (){
    for (var i = 0; i<hours.length; i++) {
      container.append('<div id="hour-'+ hours[i]+'"class="row time-block '+blockChecker(hours[i]) +'"><div class="col-2 col-md-1 hour text-center py-3">'+ fixTime(hours[i]) + '</div><textarea class="col-8 col-md-10 description" rows="3" id="'+ hours[i]+' text"> </textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true" onclick="save('+hours[i]+', '+$('#'+hours[i]+' text').text()+')"></i></button></div>')
      
    };
}
createTimeBlocks();

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });