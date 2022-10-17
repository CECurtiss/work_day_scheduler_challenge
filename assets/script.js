currentDay = moment().format("dddd, MMMM DD YYYY");
$('#currentDay').text(currentDay);
var savedToDo = $('#savedtodo');
var saveBtn = $('.saveBtn');

localStorage.getItem(savedToDo).value;

saveBtn.addEventListener("click",function() {
    localStorage.setItem(savedToDo).value;
})