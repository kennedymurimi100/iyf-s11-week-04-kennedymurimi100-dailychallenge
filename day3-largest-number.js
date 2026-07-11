function findLargest(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

function findLargestWithReduce(numbers) {
  return numbers.reduce((largest, current) => {
    if (current > largest) {
      return current;
    }

    return largest;
  });
}

console.log(findLargest([8, 3, 15, 6, 10]));
console.log(findLargest([100, 45, 78, 99]));
console.log(findLargest([-5, -10, -2, -8]));

console.log(findLargestWithReduce([8, 3, 15, 6, 10]));
console.log(findLargestWithReduce([100, 45, 78, 99]));
console.log(findLargestWithReduce([-5, -10, -2, -8]));