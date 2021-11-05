/**
 * @description 數字陣列加總
 *
 * @param {number} arr
 * @returns
 */
export const getArrayNumSum = arr =>
  arr.reduce((a, b) => Number(a) + Number(b), 0);
