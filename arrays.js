// Challenge 1

const value = (array, i) => {
  return array[i];
}

console.log(value(['Hi', 'My', 'Name', 'Is', 'Ryan'], 2));

// Challenge 2

const isLuna = (array) => {
  return array.includes('Luna');
}

console.log(isLuna(['Luna', 'Ryan', 'Hailey']));
console.log(isLuna(['Joe', 'Ryan', 'Hailey']));
