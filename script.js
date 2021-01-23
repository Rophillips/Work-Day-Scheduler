

//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

//WHEN I click into a time block
//THEN I can enter an event

//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage

//WHEN I refresh the page
//THEN the saved events persist

//current date and time in jumbotron
var d = new Date();
document.getElementById("currentDay").innerHTML = d.toDateString();

//hours
var nine = document.querySelector("#nineAM");
var ten = document.querySelector("#tenAM");
var eleven = document.querySelector("#elevenAM");
var twelve = document.querySelector("#twelvePM");
var one = document.querySelector("#onePM");
var two = document.querySelector("#twoPM");
var three = document.querySelector("#threePM");
var four= document.querySelector("#fourPM");
var five = document.querySelector("#fivePM");

var currentDay = new Date();
var years = ["2021", "2022",];

//days array
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//months array
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var day = days[new Date().getDay()];
var month = months[new Date().getMonth()];
var date = currentDay.getDate();
var year = years[new Date().getFullYear()];
var currentTime = [new Date().getHours()];

if (date === 1 || date === 21 || date === 31){
  currentDate.text(day + " " + month + " " + date + "st" + ", " + year);
}else if (date === 2 || date === 22) {

}else if (date === 3 || date === 23) {

}else {
  currentDate.text(day + " " + month + " " + date + "th" + ", " + year);
}

var timeBlock = $(".time-block");

var timeBlockValue = parseInt($(timeBlock[i]).attr("value"));

for(var i = 0; i < timeBlock.length; i++){
    var timeBlockValue = parseInt($(timeBlock[i]).attr("value"));
    if (timeBlockValue < currentTime) {
        $(timeBlock[i]).addClass("past");

    }else if(timeBlockValue === currentTime){
        $(timeBlock[i]).addClass("present");
        
    }else if (timeBlockValue > currentTime){
        $(timeBlock[i]).addClass("future");
    }
}

if(i === 12){
  timeBlock.css(["background-color", "red"]);
  timeBlock.addClass("red-class");
}
if((new Date()).getHours() === i){ // uses military time 0-23 for hours
  timeBlock.addClass("red-class");
}
//push local storage
var userInput = [];

function renderTasks() {
  for(var i = 0; i < timeBlock.length; i++){
    console.log(timeBlockValue[i].children);
  }
}
$(".saveBtn").on("click", function(){
  var savedInput = $(this).prev().children().val();
  localStorage.setItem("userInput", savedInput);
})
