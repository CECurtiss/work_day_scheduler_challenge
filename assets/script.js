currentDay = moment().format("dddd, MMMM DD YYYY");
$('#currentDay').text(currentDay);
var saveBtn = $('.saveBtn');


$('#nine').val(localStorage.getItem('9'));
$('#ten').val(localStorage.getItem('10'));
$('#eleven').val(localStorage.getItem('11'));
$('#twelve').val(localStorage.getItem('12'));
$('#one').val(localStorage.getItem('1'));
$('#two').val(localStorage.getItem('2'));
$('#three').val(localStorage.getItem('3'));
$('#four').val(localStorage.getItem('4'));
$('#five').val(localStorage.getItem('5'));

$('.saveBtn').click(function() {
    var value = $(this).siblings('.description').val();
    console.log(value);
    var time = $(this).data("time");
    console.log(time);
    localStorage.setItem(time,value);
    
});

function colorCode() {
    // currentTime= moment().hour();
    currentTime=12;
    if (currentTime > data-time) {
        document.time-block.addClass('past');
    } else if (currentTime = data-time){
        document.time-block.addClass('present');
    } else if (currentTime < data.time){
        document.time-block.addClass('future');
    }
}

colorCode();
