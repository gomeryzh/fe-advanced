"use strict";

const time = document.querySelector("p.js-time");
const startBtn = document.querySelector("button.js-start");
const pauseBtn = document.querySelector("button.js-pause");
const stopBtn = document.querySelector("button.js-reset");

class Watch {
  constructor({ showTime }) {
    this.value = 0;
    this.isActive = false;
    this.watchId = null;
    this.startTime = null;
    this.deltaTime = null;
    this.showTime = showTime;
    this.isPaused = false;
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
    
    if (!this.isPaused) {
      this.isPaused = true;
      clearInterval(this.watchId);
    }

    if(this.isPaused) {
      this.isPaused = false;
      pauseBtn.textContent = 'Continue';
      // this.watchId = setInterval(() => {
      //   const currentTime = Date.now();
      //   this.deltaTime = currentTime - this.startTime;
      //   const pauseTime = new Date(this.deltaTime);
      //   const min = pauseTime.getMinutes();
      //   const sec = pauseTime.getSeconds();
      //   const ms = Number.parseInt(pauseTime.getMilliseconds() / 100);
      //   this.showTime({ min, sec, ms });
      // }, 100);
    }

  }

  onStop() {
    this.isActive = false;
    clearInterval(this.watchId);
    this.watchId = null;
    this.startTime = null;
    this.deltaTime = 0;
    this.showTime({ min: 0, sec: 0, ms: 0 });
  }
}

const watch = new Watch({ showTime: updateWatch });

function updateWatch({ min, sec, ms }) {
  time.textContent = `${min}:${sec}.${ms}`;
}

startBtn.addEventListener("click", watch.onStart.bind(watch));

pauseBtn.addEventListener("click", watch.onPause.bind(watch));

stopBtn.addEventListener("click", watch.onStop.bind(watch));
