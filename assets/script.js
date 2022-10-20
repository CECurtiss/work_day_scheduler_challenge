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
    currentTime= moment().hour();
console.log(currentTime);
    $(".hour").each(function() {
        var timeRow = parseInt($(this).data("hour"));
        console.log(timeRow);
      if (currentTime > timeRow) {
        $(this).siblings().addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    } else if (currentTime === timeRow){
        $(this).siblings().addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
    } else if (currentTime < timeRow){
        $(this).siblings().addClass('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
    }
});
}

colorCode();
