var currentDay = $('#currentDay');


currentDay = moment().format("dddd, MMMM DD YYYY");
$('#currentDay').text(currentDay);