function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    let j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let shuffledNumbers = shuffle(numbers);
console.log(shuffledNumbers);
// Output: A randomly shuffled version of [1, 2, 3, 4, 5], e.g., [4, 1, 5, 2, 3]