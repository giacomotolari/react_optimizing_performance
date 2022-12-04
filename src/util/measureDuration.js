const measureDuration = (func) => {
  let start = performance.now();
  func();
  let end = performance.now();
  return end - start;
};

// console.log(
//   measureDuration(function () {
//     let num = 0;
//     for (let i = 0; i < 1000000; i++) {
//       num += i;
//     }
//     return num;
//   })
// );

export default measureDuration;