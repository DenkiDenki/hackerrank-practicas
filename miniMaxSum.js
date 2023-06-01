const arr = [1, 3, 5, 7, 9];
const arr2 = [7, 5, 4, 1, 9];
const arr3 = [5, 5, 5, 5, 5];
function miniMaxSum(arr) {
  // Write your code here
  arr.sort(function (a, b) {
    return a - b;
  });
  let a = arr.slice(0, -1).reduce((a, b) => a + b, 0);

  let b = arr.slice(1).reduce((a, b) => a + b, 0);
  return `${a} ${b}`;
}
console.log(miniMaxSum(arr3));
