

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
var four= document.querySelector("#fourPM");
var five = document.querySelector("#fivePM");


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

//if(i === 12){
  //timeBlock.css(["background-color", "red"]);
  //timeBlock.addClass("red-class");
//}
//if((new Date()).getHours() === i){ 
  //timeBlock.addClass("red-class");
//}
//push local storage
var userInput = [];


$(".saveBtn").on("click", function(){
  $(".task").each(function (i){
    var text = $(this).val();
    console.log(this);

    var time = $(this).attr("id");
    console.log(time, text);
    localStorage.setItem(time, text);
  })

})
