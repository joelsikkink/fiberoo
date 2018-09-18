function fib() {
  const fibList = [0, 1];
  for (let i = 2; i < 100; i++) {
    fibList[i] = fibList[i - 1] + fibList[i - 2];
  }
  return fibList;
}
function numsToStrings(givenArr) {
  return _.map(givenArr, function (num) { return num.toString(); });
}
function numEvenNums(givenArr) {
  const numArr = _.filter(givenArr, function (num) { return num % 2 === 0; });
  return numArr.length;
}
console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
