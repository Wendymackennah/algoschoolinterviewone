// array 1,2,3,#
// return the  reversed arrays without special characters
// initialize
// loop
// update without special char
// return
// const mixedArray = [1, 2, 3, "#"];
// mixedArray.reverse();
// mixedArray.remove(i[-1])

// function reversedArray(mixedArray)

//  {
// // for (let i = 0; i < mixedArray.length; i++) {
//   if(mixedArray[i] === "#"){

//   }

//   console.log(mixedArray[i]);
// }
//   return mixedArray;

// console.log(reversedArray(mixedArray));

function reverseAndExcludeSpecial(arr) {
  // Reverse the original array
  const reversedArr = arr.slice().reverse(); // Create a copy of arr and then reverse it

  // Create a new array to store elements without special characters
  const filteredArr = [];

  // Filter out special characters and store elements in filteredArr
  for (let i = 0; i < reversedArr.length; i++) {
    if (typeof reversedArr[i] === "number") {
      filteredArr.push(reversedArr[i]);
    }
  }

  return filteredArr;
}

const arr = [1, 2, 3, "#"];
const reversedFilteredArray = reverseAndExcludeSpecial(arr);
console.log(reversedFilteredArray);
