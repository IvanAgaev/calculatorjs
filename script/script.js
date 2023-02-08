
//Two dimensional array

const arr = [[2, 4, 9, 11], [6, 8, 0,5], [3,9,2,1]];
function customMatrix(array) {
  if (array[0][0] !== undefined) {

    const arr3 = array.slice();
    let arrLength = arr3.length;
    let itemLength = arr3[0].length;
    const result = new Array(itemLength);
    result.length = itemLength;
    for (let i = 0; i < itemLength; i++) {
      result[i] = new Array(arrLength);

    }



    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[0].length; j++) {
        result[i][j] = arr3[j][i];
      


      }

    }
    return result;

  }
  else {
    console.log('Not a two dimmensional array');

  }
};
console.log('Матриця');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log('Транспонована матриця');
let p = customMatrix(arr);
console.log(p);

//Selection sort

const arraySelection = [2, 1, 8, 6];
console.log('Невідсортований массив');
console.log(arraySelection);
function sortSelection(array) {
  if (array instanceof Array) {
    let min = 0;
    array2 = [...array];
    for (let i = 0; i < array2.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < array2.length; j++) {
        if (array2[min] > array2[j]) {
          min = j;
        }
      }
      temp = array2[i];
      array2[i] = array2[min];
      array2[min] = temp;
    }
    console.log(array2);
  }
  else {
    console.log('Аргументом має бути массив!');
  }
};
console.log('Відсортований массив виборкою');
sortSelection(arraySelection);













