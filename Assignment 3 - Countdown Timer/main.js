let timer = undefined;
let secondsCounter = 0;

const $hours = $('#hours'),
    $minutes = $('#minutes'),
    $seconds = $('#seconds'),

    $startBtn = $('#start-btn'),
    $resultContainer = $('#result-container');

const getTimeObject = () => {
    let tmpSeconds = secondsCounter;

    const tmpHours = Math.floor(tmpSeconds / 3600);
    tmpSeconds %= 3600;
    const tmpMinutes = Math.floor(tmpSeconds / 60);
    tmpSeconds %= 60;

    return {
        hours: addLeadingZero(tmpHours),
        minutes: addLeadingZero(tmpMinutes),
        seconds: addLeadingZero(tmpSeconds)
    };
}

const addLeadingZero = number => {
    if (number === 0) return '00';
    if (number < 10) return `0${number}`;

    return number;
}

const renderTime = () => {
    const {hours: h, minutes: m, seconds: s} = getTimeObject();

    $hours.text(h);
    $minutes.text(m);
    $seconds.text(s);
}

const clearTimer = () => {
    clearInterval(timer);
    timer = undefined;
    secondsCounter = 0;
}

const resetTime = () => {
    $hours.text('00');
    $minutes.text('00');
    $seconds.text('00');
}


const timerIsFinished = () => {
    let audio = new Audio('timer_finished.mp3');
    audio.play();

    $resultContainer.text('Timer is finished!');
}



const startBtnHandler = () => {
    $startBtn.prop('disabled', false);

    const startBtnHandler = $startBtn.bind('click', e => {
        $resultContainer.empty();
        $startBtn.unbind('click');
        $startBtn.prop('disabled', true);
        e.preventDefault();

        const time = $('#time').val();

        if (secondsCounter < time) {
            timer = setInterval(() => {
                if (secondsCounter < time) {
                    secondsCounter++;
                    renderTime();
                }
                else {
                    clearTimer();
                    timerIsFinished();
                }
            }, 1000);
        }
    });
}


$('#pause-btn').bind('click', e => {
    e.preventDefault();

    if (timer !== undefined) {
        clearInterval(timer);
        timer = undefined;
        startBtnHandler();
    }
});

$('#reset-btn').bind('click', e => {
    e.preventDefault();

    clearTimer();
    resetTime();

    $startBtn.prop('disabled', false);
    $resultContainer.empty();
});



startBtnHandler();