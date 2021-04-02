
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"))

// var timeOfDay = $("#timeofday")
// console.log(timeOfDay)

var currentHour = moment().format("HH")
console.log(currentHour)

// var test = $("#09")
// test.addClass("future")

var timeColumn = $(".timeColumn")
console.log(timeColumn[0])
console.log(currentHour)

$(".save-btn").on("click",function(){
    event.preventDefault();
    var time = $(this).parent().attr("id")
    var text = $(this).siblings(".description").val()
    localStorage.setItem(time,text)
})

for (i = 0; i < timeColumn.length;i++){
    var temp = timeColumn[i];
    console.log(temp)
    
    if (timeColumn[i].id === currentHour) {
        temp.classList.remove("past");
        temp.classList.remove("future");
        temp.classList.add("present");
    }else if (timeColumn[i].id > currentHour){
        temp.classList.remove("past");
        temp.classList.remove("present");
        temp.classList.add("future");
    } else {
        temp.classList.remove("future");
        temp.classList.remove("present");
        temp.classList.add("past");
    } 
     
}

$("#9hour .description").val(localStorage.getItem("9hour"))
$("#10hour .description").val(localStorage.getItem("10hour"))
$("#11hour .description").val(localStorage.getItem("11hour"))
$("#12hour .description").val(localStorage.getItem("12hour"))
$("#13hour .description").val(localStorage.getItem("13hour"))
$("#14hour .description").val(localStorage.getItem("14hour"))
$("#15hour .description").val(localStorage.getItem("15hour"))
$("#16hour .description").val(localStorage.getItem("16hour"))
$("#17hour .description").val(localStorage.getItem("17hour"))

