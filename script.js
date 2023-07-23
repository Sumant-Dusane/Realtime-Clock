var [hr, min, sec] = [0,0,0];
var currentDate;

window.onload = (event) => {
    getTime();
    updateRealtime();
}

function updateRealtime() {
    setInterval(() => {
        sec += 1;
        if(sec % 60 == 0 && sec != 0) {
            min += 1;
            sec = 0
        }
        if(hr % 60 == 0 && min != 0) {
            hr += 1;
            min = 0
        }

        setValues(hr, min, sec);
    }, 1000)
}

function setValues(hr, min, sec) {
    document.getElementById('hr').innerHTML = hr;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('date').innerHTML = currentDate;
}

async function getTime() {
    const response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    const timedata = await response.json();
    let timestamp = new Date(timedata.datetime).toLocaleString();
    let [date, time] = timestamp.toString().split(',').map(String);
    [hr, min, sec] = time.split(':').map(Number);
    currentDate = date;
}

