function removeDuplicates(numbers) {
  return [...new Set(numbers)];
}

function removeDuplicatesWithFilter(numbers) {
  return numbers.filter((number, index) => {
    return numbers.indexOf(number) === index;
  });
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([5, 5, 5, 5]));
console.log(removeDuplicates([1, 2, 3, 4]));

console.log(removeDuplicatesWithFilter([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicatesWithFilter([5, 5, 5, 5]));
console.log(removeDuplicatesWithFilter([1, 2, 3, 4]));