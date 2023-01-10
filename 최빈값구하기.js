function solution(array) {
  let map = new Map();
  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i]) + 1);
  }
  let arr = Array.from(map.values());
  let most = Math.max(...arr);
  if (arr.indexOf(most) !== arr.lastIndexOf(most)) {
    return -1;
  } else {
    return arr.indexOf(most);
  }
}
