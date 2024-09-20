function debounceTest() {
  console.log(" debounce effect! hello there ");
}
function throttleTest() {
  console.log("Throttle test! hello there  ");
}
function getData(cb, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}
function throttle(cb, delay) {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      cb();
    }
  };
}

const throttledFunction = throttle(throttleTest, 1000);

const batterFunction = getData(debounceTest, 1000);
// const batterFunction=getData(test,1000)
