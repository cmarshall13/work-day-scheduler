const currentDate = moment().format("dddd MMMM Do");
$("#currentDate").html(currentDate);

const currentHour = moment().format('HH');

//create function to check current time
function checkTime() {
    $('textarea').each(function () {
        if ($(this).attr('id') == currentHour) {
            $(this).addClass('present');
        } else if ($(this).attr('id') < currentHour) {
            $(this).addClass('past');
        } else if ($(this).attr('id') > currentHour) {
            $(this).addClass('future');
        }
        setInterval(checkTime, (1000 * 60));
    })
};

//create function to load tasks
function loadTasks () {
    //first check to see if task is from current date, if not clear it from localStorage
    if (currentHour > 17) {
        localStorage.clear();
        window.location.reload;
    };

    Object.keys(localStorage).forEach((key) => {
        $('textarea').each(function () {
            if ($(this).attr('id') == key) {
                $(this).setInterval(localStorage.getItem(key));
            }
        });
    });
};