let div = document.getElementById('topCreators');



let data = [
    {
        avImg: "./media/homepage/arAv (1).png",
        avName: "Keepitreal"
    },
    {
        avImg: "./media/homepage/arAv (2).png",
        avName: "DigiLab"
    },
    {
        avImg: "./media/homepage/arAv (3).png",
        avName: "GravityOne"
    },
    {
        avImg: "./media/homepage/arAv (4).png",
        avName: "Juanie"
    },
    {
        avImg: "./media/homepage/arAv (5).png",
        avName: "BlueWhale"
    },
    {
        avImg: "./media/homepage/arAv (6).png",
        avName: "mr fox"
    },
    {
        avImg: "./media/homepage/arAv (7).png",
        avName: "Shroomie"
    },
    {
        avImg: "./media/homepage/arAv (8).png",
        avName: "robotica"
    },
    {
        avImg: "./media/homepage/arAv (9).png",
        avName: "RustyRobot"
    },
    {
        avImg: "./media/homepage/arAv (10).png",
        avName: "cyb"
    }
];

for (let i = 1; i <= data.length; i++) {
    
    let div_2 = document.createElement("div");

    div_2.id = "creator"+i;
    div_2.className = "creators";

    div.append(div_2);


    let div_2_call = document.getElementById('creator'+i);

    let div_3 = document.createElement("div");
    div_3.className = "creators_number_image";
    div_3.id = "cni"+i;

    let span = document.createElement("a");
    span.className = "sec_h4 mar_3";
    span.textContent = data[i-1].avName;
    span.href = "./Artist Page.html ";

    let div_4 = document.createElement("div");
    div_4.className = "sec_3_total";
    div_4.id = "s3t"+i;

    div_2_call.append(div_3, span, div_4)


    let div_3_call = document.getElementById("cni"+i);
    
    let div_4_call = document.getElementById("s3t"+i);
    
    let span_2 = document.createElement("span");
    span_2.className = "sec_h5";
    span_2.textContent = i;

    let img_1 = document.createElement("img");
    img_1.src = data[i-1].avImg;
    img_1.className = "mar_2";

    let span_3 = document.createElement("span");
    span_3.className = "sec_h6";
    span_3.textContent = "Total Sales:";

    let span_4 = document.createElement("span");
    span_4.className = "sec_h5";
    span_4.textContent = "34.53 ETH";
    
    div_3_call.append(span_2, img_1);
    div_4_call.append(span_3, span_4)
}



let div_5 = document.getElementById('allCategories');


let categories = [
    {
        img: "./media/homepage/categories (1).png",
        name: "Art"
    },
    {
        img: "./media/homepage/categories (2).png",
        name: "Collectibles"
    },
    {
        img: "./media/homepage/categories (3).png",
        name: "Music"
    },
    {
        img: "./media/homepage/categories (4).png",
        name: "Photography"
    },
    {
        img: "./media/homepage/categories (5).png",
        name: "Video"
    },
    {
        img: "./media/homepage/categories (6).png",
        name: "Utility"
    },
    {
        img: "./media/homepage/categories (7).png",
        name: "Sport"
    },
    {
        img: "./media/homepage/categories (8).png",
        name: "Virtual Worlds"
    }
];



for (let i = 1; i <= categories.length; i++) {
    
    let div_6 = document.createElement("a");
    div_6.className = "sec_4_categories";
    div_6.id = "categories"+i;
    
    div_5.append(div_6);


    let div_6_call = document.getElementById('categories'+i);
    
    let img = document.createElement("img");
    img.src = categories[i-1].img;

    let span_5 = document.createElement("a");
    span_5.className = "sec_h4";
    span_5.textContent = categories[i-1].name;
    span_5.href = "#";

    div_6_call.append(img, span_5);

};


class CountdownTimer {
    constructor(deadline, cbChange, cbComplete) {
    this._deadline = deadline;
    this._cbChange = cbChange;
    this._cbComplete = cbComplete;
    this._timerId = null;
    this._out = {
        days: '', hours: '', minutes: '', seconds: '',
        daysTitle: '', hoursTitle: '', minutesTitle: '', secondsTitle: ''
    };
    this._start();
    }
    static declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    _start() {
    this._calc();
    this._timerId = setInterval(this._calc.bind(this), 1000);
    }
    _calc() {
    const diff = this._deadline - new Date();
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    this._out.days = days < 10 ? '0' + days : days;
    this._out.hours = hours < 10 ? '0' + hours : hours;
    this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
    this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
    this._out.daysTitle = CountdownTimer.declensionNum(days, ['Day ',' Day ',' days']);
    this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['Hour ',' hours ',' hours']);
    this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['minute ',' minutes ',' minutes']);
    this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['second ',' seconds ',' seconds']);
    this._cbChange ? this._cbChange(this._out) : null;
    if (diff <= 0) {
        clearInterval(this._timerId);
        this._cbComplete ? this._cbComplete() : null;
    }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const elDays1 = document.querySelector('.timer-1 .timer__days');
    const elHours1 = document.querySelector('.timer-1 .timer__hours');
    const elMinutes1 = document.querySelector('.timer-1 .timer__minutes');
    const elSeconds1 = document.querySelector('.timer-1 .timer__seconds');
    const deadline1 = new Date(Date.now() + (360 * 1000 + 999));
    new CountdownTimer(deadline1, (timer) => {
    elDays1.textContent = timer.days;
    elHours1.textContent = timer.hours;
    elMinutes1.textContent = timer.minutes;
    elSeconds1.textContent = timer.seconds;
    elDays1.dataset.title = timer.daysTitle;
    elHours1.dataset.title = timer.hoursTitle;
    elMinutes1.dataset.title = timer.minutesTitle;
    elSeconds1.dataset.title = timer.secondsTitle;
    }, () => {
    document.querySelector('.timer-1 .timer__result').textContent = 'The timer ended!';
    });
});