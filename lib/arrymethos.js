// let colors : string[]= ["Red",'Green','Blue'];
// console.log(colors);  // Original Array
// colors.push("Yellow");  // Push method use for insert element is last
// console.log(colors);
// colors.pop();           // pop method use for delete last element from array
// console.log(colors);
// colors.unshift("Pink");  // insert a New element in first in array  
// console.log(colors);
// colors.shift();          // delete element from array at begining
// console.log(colors);
// concat()
// The concat()method creates a new array by concatenating two or more arrays. 
// It doesn’t modify the existing arrays but instead returns a new array that contains the elements of all the arrays.
// Example:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3); // [1, 2, 3, 4, 5, 6]
// every()
// The every()method tests whether all elements in an array pass a given condition. 
//It returns true if all elements pass the condition; otherwise, it returns false.
// const arr = [1, 2, 3, 4, 5];
// const isPositive = (num: number) => num > 0;
// const result = arr.every(isPositive);
// console.log(result); // true
// filter()
// The filter()method creates a new array with all elements that pass a given condition. 
//It doesn’t modify the existing array but returns a new one.
// const arrFilter = [1, 2, 3, 4, 5];
// const isEven = (num: number) => num % 2 === 0;
// const result = arrFilter.filter(isEven);
// console.log(result); // [2, 4]
// find()
// The find()method returns the first element in an array that passes a given condition. 
// It returns undefined if no element passes the condition.
// const arr = [1, 2, 3, 4, 5];
// const isGreaterThanThree = (num: number) => num > 2;
// const result = arr.find(isGreaterThanThree);
// console.log(result); // 3
// findIndex()
// The findIndex() method returns the index of the first element in an array that passes a given condition. 
//It returns -1 if no element passes the condition.
// const arr = [1, 2, 3, 4, 5];
// const isGreaterThanThree = (num: number) => num > 3;
// const result = arr.findIndex(isGreaterThanThree);
// console.log(result); // 3
// forEach()
// The forEach()method executes a provided function once for each array element. It doesn’t return anything and doesn’t modify the array.
// const arr = [1, 2, 3, 4, 5];
// arr.forEach(num => console.log(num));
// // Output: 1, 2, 3, 4, 5
// includes()
// The includes()method determines whether an array includes a certain value. 
// It returns true if the value is found; otherwise, it returns false.
// const arr = [1, 2, 3, 4, 5];
// const result = arr.includes(4);
// console.log(result); // true
// indexOf()
// The indexOf()method returns the first index at which a given element can be found in an array. It returns -1 if the element is not found.
// const arr = [1, 2, 3, 4, 5];
// const result = arr.indexOf(3);
// console.log(result); // 2
// join()
// The join() method joins all elements of an array into a string. You can specify the separator to use between elements.
// const arr = ['Rizwan', 'Ahmed'];
// const str = arr.join(' ');
// console.log(str); // "Rizwan Ahmed"
// lastIndexOf()
// The lastIndexOf()method returns the index of the last occurrence of a specified element in an array.
// const arr = [1, 2, 3, 4, 5];
// const index = arr.lastIndexOf(4);
// console.log(index); // 3
// map()
// The map()method creates a new array with the results of calling a provided function on every element in the array.
// const arr = [1, 2, 3, 4];
// const newArr = arr.map(num => num * 2);
// console.log(newArr); // [2, 4, 6, 8]
// reduce()
// The reduce() method executes a provided function for each value of an array, from left to right, and returns a single value.
const arr = [1, 2, 3];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 6
export {};
