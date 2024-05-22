let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let wm = document.getElementById('w_minutes');
let ws = document.getElementById('w_seconds');

let bm = document.getElementById('b_minutes');
let bs = document.getElementById('b_seconds');

let startTimer;

function timeToPercent(currentTimeStr, maxTimeStr) {
    function timeToSeconds(timeStr) {
        const [minutes, seconds] = timeStr.split(':').map(Number);
        return (minutes * 60) + seconds;
    }

    const currentSeconds = timeToSeconds(currentTimeStr);
    const maxSeconds = timeToSeconds(maxTimeStr);

    return (currentSeconds / maxSeconds) * 100;
}


const maxTimeStr = "25:00";
const maxHeightPx = 200;


start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000);
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
    renderProgress();
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


// Start Timer Function
function timer(){
    // Work Timer Countdown
    if (ws.innerText != 0){
        ws.innerText--;
        renderProgress();
    } else if(wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
        renderProgress();
    }

    // Break Timer Countdown
    if (wm.innerText == 0 && ws.innerText == 0) {
        if(bs.innerText != 0){
            bs.innerText--;
            renderProgress();
        } else if(bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
            renderProgress();
        }
    }

    // Increment Counter by one if one full cycle is completed
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
        renderProgress();
    }
}

const renderProgress = () => {
    let time = `${wm.innerText}:${ws.innerText}`;

    const percent = timeToPercent(time, maxTimeStr);

    let height = (percent * maxHeightPx) / 100;
    document.getElementById('pomodoro-progress').style.height = `${height}px`;
}

// Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}