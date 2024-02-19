const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

function calculateTime() {
    let date = new Date();

    let time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        meridiem: "AM"
    }

    if (time.hour > 12) {
        time.hour -= 12;
        time.meridiem = "PM"
    }
    if (time == 0) {
        time.hour = 12;
    }

    if (time.minute < 10) {
        time.minute = '0' + time.minute
    }

    let timeString = `${time.hour}:${time.minute} ${time.meridiem}`;
    return timeString
}

function calculateDate() {
    let date = new Date();

    const months = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let time = {
        month: months[date.getMonth()],
        date: date.getDate(),
        suffix: ''
    }

    if (String(time.date).endsWith('1')) {
        time.suffix = 'st'
    } else if (String(time.date).endsWith('2')) {
        time.suffix = 'nd'
    } else if (String(time.date).endsWith('3')) {
        time.suffix = 'rd'
    } else {
        time.suffix = 'th'
    }

    let dateString = `${time.month} ${time.date}${time.suffix}`
    return dateString
}

function update() {
    timeElement.innerText = calculateTime()
    dateElement.innerText = calculateDate()
}

update()

setInterval(update, 1000)