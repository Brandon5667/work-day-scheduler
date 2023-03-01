var dateEl = $('#currentDay');
var container = $(".container-fluid")
var hours = [8,9,10,11,12,13,14,15,16,17];
var day = dayjs().format('ddd, MMM D');
dateEl.text(day);
var time = dayjs().format('H');
// testing variable set with 24hour time to manually set time
// var time = 14;
console.log(hours);


// uses jquery to create time blocks and sets id based on hours array
function createTimeBlocks (){
    for (var i = 0; i<hours.length; i++) {
      container.append(`<div id="hour-${hours[i]}" class="row time-block ${blockChecker(hours[i])}">
  <div class="col-2 col-md-1 hour text-center py-3">${fixTime(hours[i])}</div>
  <textarea class="col-8 col-md-10 description" rows="3" id="text${hours[i]}">${checkStorage(hours[i])}</textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save" onclick="saveToDo(${hours[i]})">
    <i class="fas fa-save" aria-hidden="true" id="button${hours[i]}" ></i>
  </button>
</div>`);      
      
    
    };
}

createTimeBlocks();

function checkStorage (index){
  console.log(localStorage.getItem(index));

  if (localStorage.getItem(index) != null){
    var storedItem = localStorage.getItem(index);
    console.log(storedItem);
    return storedItem;
  }
}
// fixes time to 12 hour day
function fixTime(blockHour){
    var correctTime;
    if (blockHour < 12 && blockHour != 0){
      correctTime = blockHour + 'am';
    }
    else if (blockHour > 12){
      blockHour = blockHour - 12;
      correctTime = blockHour + 'pm';
    }
    else {
      correctTime = '12pm';
    }
    return correctTime;
    
}
// gives blocks a class based on relation to current hour
function blockChecker(blockHour){
    var blockColor;
    if (blockHour < time){
      blockColor = 'past';
    }
    else if (blockHour > time){
      blockColor = 'future';
    }
    else{
      blockColor = 'present';
    }
    return blockColor;
}
// saves text in forms to localStorage if data already exist it removes data from form and localStorage
function saveToDo(form){
  if (localStorage.getItem(form) == null){
    console.log(form);
    var text = $('#text' + form).val();
    console.log(text);
    window.localStorage.setItem(form, text);
    console.log(localStorage.getItem(form));
    $( "#button" + form).removeClass( "fas fa-save" );
    $( "#button" + form).addClass( "fas fa-trash" );
  }
  else{
    $( "#button" + form).removeClass( "fas fa-trash" );
    $( "#button" + form).addClass( "fas fa-save" );
    $('#text' + form).val("");
    localStorage.removeItem(form);
    
  }
  }

  
// class="bi bi-trash"
