'use strict'
// 1行目に記載している 'use strict' は削除しないでください
/*
  function doubleArray(array) {
    const result = [];
    for (const num of array) {
        result.push(num * 2);
    }
    return result;
  }

  doubleArray([2, 3, 4, 5, 6]); // => [4, 6, 8, 10, 12]

  function square(array) {
    const result = [];
    for (const num of array) {
        result.push(num * num);
    }
    return result;
   }
   
   square([2, 3, 4, 5, 6]); // => [4, 9, 16, 25, 36]
*/
   /**
    * @param {string} ???
    * @returns {string} 与えられた引数に挨拶文を追加した文字列
    */
/*
function getGreeting(name) {
  return "Hello, " + name + ".";
}

   test(["zeno", "yanis", "xander"].map(getGreeting), [
    "Hello, zeno.",
    "Hello, yanis.",
    "Hello, xander.",
  ]);
*/

/**
* @param {number} ???
* @returns {number} 与えられた引数の絶対値
*/
/*
function abs(arrayNum) {
  return Math.abs(arrayNum);
}

test([1, 2, 3].map(abs), [1, 2, 3]);
test([-1, -2, -3].map(abs), [1, 2, 3]);
test([-1, 2, -3].map(abs), [1, 2, 3]);
*/

/**
* @param {Array<number>} ???
* @returns {Array<number>} 与えられた配列の各要素に 1 を足した数を要素として持つ、新しい配列
*/
/*
const addOne = function(arrayNum) {
  return arrayNum + 1;
}

function getIncrementedNumbers(arrayNum) {
  return arrayNum.map(addOne);
}

test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// 元の配列が変更されていないことを確認してください
test(array1, [0, 0, 0]);
*/

/**
* @param {Array<number|string>} ???
* @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
*/
const switched = function (arrayNumber) {
if (typeof arrayNumber === "number") {
  return arrayNumber + "";
} else if (typeof arrayNumber === "string") {
  return arrayNumber - "";
}
}

function getSwitched(arrayNumber) {
  return arrayNumber.map(switched);
}

test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);
