"use strict";

const time = document.querySelector("p.js-time");
const startBtn = document.querySelector("button.js-start");
const pauseBtn = document.querySelector("button.js-pause");
const stopBtn = document.querySelector("button.js-reset");

const body = document.querySelector('body');


class Watch {
  constructor(elem, {
    showTime
  }) {
    this.elem = elem;
    this.isActive = false;
    this.watchId = null;
    this.startTime = null;
    this.deltaTime = null;
    this.showTime = showTime;
    this.createSecondomizer();
  }

  createSecondomizer() {
    const elements = this.createElements(this.elem);
    this.elem.appendChild(elements);

    this.onStart;
  }

  createElements(elem) {
    const root = document.createElement("div");

    const timer = document.createElement("div");
    timer.classList.add("stopwatch");

    const time = document.createElement("p");
    time.classList.add("time");
    time.classList.add("js-time");
    time.textContent = "00:00.0";

    const startBtn = document.createElement("button");
    startBtn.classList.add("btn");
    startBtn.classList.add("js-btn");
    startBtn.textContent = "Start";

    const pauseBtn = startBtn.cloneNode(false);
    pauseBtn.textContent = "Pause";

    const stopBtn = startBtn.cloneNode(false);
    stopBtn.textContent = "Reset";

    const lapsList = document.createElement("ul");
    lapsList.classList.add("laps");
    lapsList.classList.add("js-laps");

    timer.append(time, startBtn, pauseBtn, stopBtn);
    root.append(timer, lapsList);
    return root;
  }

  startTimer() {
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
        this.showTime({
          min,
          sec,
          ms
        });
      }, 100);
    }
  }

  stopTimer() {
    if (this.isActive) {
      this.isActive = false;

      clearInterval(this.watchId);
      this.watchId = null;
      this.startTime = null;
      this.deltaTime = 0;
      this.showTime({
        min: 0,
        sec: 0,
        ms: 0
      });
    }
  }

  pauseTimer() {
    if (this.isActive) {
      this.isActive = false;
      clearInterval(this.watchId);
      // this.watchId = null;
      this.showTime({
        min,
        sec,
        ms
      });
    }
  }

  onStart() {
    startBtn.addEventListener("click", () => this.startTimer());
  }

  onPause() {
    pauseBtn.addEventListener('click', () => {
      this.isActive = false;
      this.pauseTimer();
      pauseBtn.textContent = "Continue";
    })
  }

  onContinue() {
    pauseBtn.addEventListener("click", () => {
      if (pauseBtn.textContent === "Continue") {
        this.startTime = Date.now() - this.deltaTime;
        this.startTimer();
        pauseBtn.textContent = "Pause";
      }
    });
  }

  onStop() {
    stopBtn.addEventListener("click", () => this.stopTimer());
  }

  onLap() {
    stopBtn.addEventListener("click", () => {
      if (stopBtn.textContent === "Reset") {

        const newLap = document.createElement("li");
        newLap.textContent = time.textContent;
        laps.appendChild(newLap);
        stopBtn.textContent = 'Lap';
      }
    });
  }
}

function showTime({
  min,
  sec,
  ms
}) {
  time.textContent = `${min}:${sec}.${ms}`;
}

const watch = new Watch(body, {
  showTime
});