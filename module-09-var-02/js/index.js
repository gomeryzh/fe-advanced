'use strict';

const clockface = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const resetBtn = document.querySelector('.js-reset');
const stopwatch = document.querySelector('.stopwatch');
const allBtn = document.querySelectorAll('button');
const list = document.querySelector('.js-laps');
stopwatch.addEventListener('click', setActiveBtn);

const stopwatchTime = {
  startTime: null,
  deltaTime: null,
  timerId: null,
  isActive: false,

  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now() - this.deltaTime;

      this.timerId = setInterval(() => {
        const currentTime = Date.now();

        this.deltaTime = currentTime - this.startTime;

        const time = new Date(this.deltaTime);

        let minute = time.getMinutes();
        let second = time.getSeconds();
        let millisecond = Number.parseInt(time.getMilliseconds() / 100);

        if (minute < 10) {
          minute = '0' + minute;
        }

        if (second < 10) {
          second = '0' + second;
        }

        clockface.textContent = `${minute}:${second}.${millisecond}`;
        startBtn.textContent = `Pause`;
        resetBtn.textContent = `Reset`;
      }, 100);
    } else {
      this.isActive = false;
      clearInterval(this.timerId);
      startBtn.textContent = `Continue`;
      resetBtn.textContent = `Lap`;
    }
  },

  reset() {
    if (this.isActive) {
      this.isActive = false;
      clearInterval(this.timerId);
      this.startTime = null;
      this.timerId = null;
      this.deltaTime = null;
      clockface.textContent = `00:00.0`;
      startBtn.textContent = `Start`;
    } else {
      const contentForItems = clockface.textContent;
      const item = document.createElement('li');
      item.classList.add('item');
      item.textContent = contentForItems;
      list.append(item);
    }
  },
};

startBtn.addEventListener('click', stopwatchTime.start.bind(stopwatchTime));
resetBtn.addEventListener('click', stopwatchTime.reset.bind(stopwatchTime));

function setActiveBtn({
  target
}) {
  const nodeName = target.nodeName;

  if (nodeName !== 'BUTTON') return;

  allBtn.forEach(btn => {
    if (btn !== target) {
      btn.classList.remove('active');
    } else {
      btn.classList.add('active');
    }
  });
}
