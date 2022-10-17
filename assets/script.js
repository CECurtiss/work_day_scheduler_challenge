currentDay = moment().format("dddd, MMMM DD YYYY");
$('#currentDay').text(currentDay);
var saveBtn = $('.saveBtn');



$('.saveBtn').click(function() {
    var value = $(this).siblings('.description').val();
    console.log(value);
    var time = $(this).data("time");
    console.log(time);
    localStorage.setItem(value,time);

});

localStorage.getItem(value);


currentTime= moment().hour();
console.log(currentTime);

