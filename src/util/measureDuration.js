const measureDuration = (func) => {
  let start = performance.now();
  func();
  let end = performance.now();
  return end - start;
};

export default measureDuration;
