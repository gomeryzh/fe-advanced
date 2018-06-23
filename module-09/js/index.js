"use strict";

const time = document.querySelector("p.js-time");
const startBtn = document.querySelector("button.js-start");
const pauseBtn = document.querySelector("button.js-pause");
const stopBtn = document.querySelector("button.js-reset");
const laps = document.querySelector("ul.js-laps");


class Watch {
  constructor({ showTime }) {
    this.value = 0;
    this.isActive = false;
    this.watchId = null;
    this.startTime = null;
    this.deltaTime = null;
    this.showTime = showTime;
  }

  createMarkup() {
    const timer = document.createElement('div');
    timer.classList.add('stopwatch');

    const time = document.createElement('p');
    time.classList.add('time');
    time.classList.add('js-time');
    time.textContent = '00:00.0';

    const startBtn = document.createElement('button');
    startBtn.classList.add('btn');
    startBtn.classList.add('js-btn');

    const pauseBtn = document.createElement('button');
    pauseBtn.classList.add('btn');
    pauseBtn.classList.add('js-btn');

    const stopBtn = document.createElement('button');
    stopBtn.classList.add('btn');
    stopBtn.classList.add('js-btn');


    // <div class="stopwatch">
    //     <p class="time js-time">00:00.0</p>
    //     <button class="btn js-start">Start</button>
    //     <button class="btn js-pause">Pause</button>
    //     <button class="btn js-reset">Reset</button>
    // </div>
    // <ul class="laps js-laps"></ul>
  }

  onStart() {
    if (!this.isActive) {
      this.startTime = Date.now();
      this.isActive = true;
      this.watchId = setInterval(() => {
        const currentTime = Date.now();
        this.deltaTime = currentTime - this.startTime;
        const myTime = new Date(this.deltaTime);
        const min = myTime.getMinutes();
        const sec = myTime.getSeconds();
        const ms = Number.parseInt(myTime.getMilliseconds() / 100);
        this.showTime({ min, sec, ms });
        
      }, 100);
    }
  }

  onPause() {
    if (this.isActive) {
      this.isActive = false;
      pauseBtn.textContent = "Continue";
      clearInterval(this.watchId);
      this.watchId = null;
      this.startTime = Date.now() - this.deltaTime;
      
      // this.deltaTime = 0;
    } else {
      
      pauseBtn.textContent = "Pause";
      this.isActive = true;
      
      this.watchId = setInterval(() => {
        this.deltaTime = Date.now() - this.startTime;
        
        const continueTime = new Date(this.deltaTime);
        const min = continueTime.getMinutes();
        const sec = continueTime.getSeconds();
        const ms = Number.parseInt(continueTime.getMilliseconds() / 100);
        this.showTime({ min, sec, ms });
      }, 100);
    }
  }

  onStop() {
    if(this.isActive) {
      stopBtn.textContent = 'Lap'; 
      this.isActive = false;
        
      clearInterval(this.watchId);
      this.watchId = null;
      this.startTime = null;
      this.deltaTime = 0;
      this.showTime({ min: 0, sec: 0, ms: 0 });
    } else {
      stopBtn.textContent = 'Reset';
      this.isActive = true;
      
      const newLap = document.createElement('li');
      newLap.textContent = time.textContent;
      laps.appendChild(newLap);
    }
    
    
  }
}

const watch = new Watch({ showTime: updateWatch });

function updateWatch({ min, sec, ms }) {
  time.textContent = `${min}:${sec}.${ms}`;
}

startBtn.addEventListener("click", watch.onStart.bind(watch));

pauseBtn.addEventListener("click", watch.onPause.bind(watch));

stopBtn.addEventListener("click", watch.onStop.bind(watch));
