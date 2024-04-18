function linearSearch(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}

module.exports = { linearSearch };
