

//current date and time 
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
var four = document.querySelector("#fourPM");
var five = document.querySelector("#fivePM");


console.log(JSON.parse(localStorage.getItem("schedule")))
var currentDate = $("#currentDay");

//days array
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//months array
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentDay = new Date();

var day = days[new Date().getDay()];
var month = months[new Date().getMonth()];
var date = currentDay.getDate();
var year = new Date().getYear()
var currentTime = new Date().getHours();

var timeBlock = $(".time-block");

//var timeBlockValue = parseInt($(timeBlock[i]).attr("value"));

//if(i === 12){
//timeBlock.css(["background-color", "red"]);
//timeBlock.addClass("red-class");
//}
//if((new Date()).getHours() === i){ 
//timeBlock.addClass("red-class");
//}
//push local storage
var userInput = [];


function add_blocks_dynamically() {
  let locally_stored_schedule = JSON.parse(localStorage.getItem("schedule"))
  for (var i = 9; i <= 17; i++) {
    // If time is past, present or future
    let time_class = ""
    if (i < currentTime) {
      time_class = "past"
    } else if (i === currentTime) {
      time_class = "present"
    } else if (i > currentTime) {
      time_class = "future"
    }

    // If I is past noon
    if (i <= 12) {
      time = i
      half = "am"
    } else {
      time = i - 12
      half = "pm"
    }

    if (locally_stored_schedule[`input${i}`] !== "undefined") {
      stored = locally_stored_schedule[`input${i}`]
    } else {
      stored = ""
    }


    $(".container").append(`<div class="row my-row">
  <div class="col-1 my-col col-b1 hour" id="elevenAM">${time} ${half}</div>
  <div class="col-9 my-col col-b2 time-block" value="11">
    <textarea id="input${i}" class="task ${time_class}">${stored}</textarea>
</div>
  <button class="col-1 my-col col-b3 fa saveBtn"></button>
</div>`)
  }
}


add_blocks_dynamically()

$(".saveBtn").on("click", function () {
  let schedule = {}
  $(".task").each(function (i) {
    var text = $(this).val();
    console.log(this);

    var time = $(this).attr("id");
    console.log(time, text);
    schedule[time] = text
    ///schedule.push({"input13":time})
  })

  localStorage.setItem("schedule", JSON.stringify(schedule))

})
