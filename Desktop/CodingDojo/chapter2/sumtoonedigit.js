function sumToOne(num) {
  var sum = num;
  while (sum > 9) {
    sum = 0;
    while (num > 0) {
      sum += Math.floor(num % 10);
      console.log(sum)
      num = num / 10;
    }
    num = sum;
  }
  return sum;
}

console.log(sumToOne(928));