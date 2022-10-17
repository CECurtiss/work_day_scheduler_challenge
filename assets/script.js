currentDay = moment().format("dddd, MMMM DD YYYY");
$('#currentDay').text(currentDay);
var saveBtn = $('.saveBtn');

$('.saveBtn').click(function() {
    localStorage.setItem("savedtodo",JSON.stringify( $('#savedtodo').val()
    ));

});


JSON.parse(localStorage.getItem('savedtodo'));

currentTime= moment().hour();
console.log(currentTime);

