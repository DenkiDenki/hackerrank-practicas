function plusMinus(arr) {
  // Write your code here
  let mayor = 0;
  let menor = 0;
  let zero = 0;

  arr.forEach((el) => {
    if (el > 0) mayor++;
    if (el < 0) menor++;
    if (el === 0) zero++;
  });
  console.log(arr);
  console.log(arr.length);

  console.log(mayor);
  console.log((mayor / arr.length).toFixed(6));

  console.log(menor);
  console.log((menor / arr.length).toFixed(6));

  console.log(zero);
  console.log((zero / arr.length).toFixed(6));
  console.log("-----");
}
plusMinus([1, 4, 5, -5, 0, 0, -6, 55]);
plusMinus([-4, 3, -9, 0, 4, 1]);
