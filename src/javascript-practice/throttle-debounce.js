let count = 0;
function debounce(fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    flag && fn.apply(context, args);
    flag = false;
    setTimeout(() => {
      flag = true;
    }, delay);
  };
}
const getData = (ev) => {
  console.log("Api response..", ev.target.value, count++);
};

const getDebounceData = debounce(getData, 1000);
const getThrottleData = throttle(getData, 1000);
