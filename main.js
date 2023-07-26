var userMonth=document.querySelector(".user-month");
var userDay=document.querySelector(".user-day");
var userYear=document.querySelector(".user-year");
var submit=document.getElementById("submit");

submit.addEventListener("click", function(evt){
    var message = document.querySelector(".message");
  var parsedMonth = (parseInt(userMonth.value)-1);
 var parsedDay = parseInt(userDay.value);
 var parsedYear = parseInt(userYear.value);
  var months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
    var weekdays=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
 ];
 var dateIs=new Date(parsedYear,parsedMonth,parsedDay);
  var weekdayIs =weekdays[dateIs.getDay()];
  var monthIs=months[parsedMonth];
  

  if (weekdayIs==undefined|| monthIs==undefined) {
    message.innerText= "";
    setTimeout(function(){
        message.innerText="please enter a vaild date";
    },500)
 }
 else{
    message.innerText= weekdayIs + "," + parsedDay + " " + monthIs + "," + parsedYear;
 }

})