function bandingkanArray(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((nilai, index) => nilai === array2[index]);
}

console.log(bandingkanArray([1, 2, 3], [1, 2, 3]));
console.log(bandingkanArray([1, 2, 3], [1, 2, 4]));