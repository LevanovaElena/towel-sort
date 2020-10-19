
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  let resultArray = [];
  let flag = false;
  for (i = 0; i < matrix.length; i++) {
    if (flag) { resultArray = resultArray.concat(matrix[i].reverse()); flag = false; }
    else {
      resultArray = resultArray.concat(matrix[i]);
      flag = true;
    }
    console.log(matrix[i]);
  }
  return resultArray;
}
