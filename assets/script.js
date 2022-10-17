currentDay = moment().format("dddd, MMMM DD YYYY");
$('#currentDay').text(currentDay);
var saveBtn = $('.saveBtn');



$('.saveBtn').click(function() {
    var savedText = $(this).siblings('.description').val();
    console.log(savedText);
    

});



currentTime= moment().hour();
console.log(currentTime);

