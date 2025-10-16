// 1.CREATING ARRAYS

// Arrays are created using square brackets [] with elements separated by commas.

// Arrays with different data types 👇
// let fruits = ["apple", "banana", "cherry"]; // an array of strings
// let numbers = [1, 2, 3, 4, 5]; // an array of numbers

// console.log(fruits); // ["apple", "banana", "cherry"]
// console.log(numbers); // [1, 2, 3, 4, 5]


// 2. FINDING THE LENGTH OF AN ARRAY

// The length property gives the number of elements in the array.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // 3 (number of elements in the array)


// 3. ACESSING AND MODIFYING ARRAY ITEMS

// You can access elements using their index (starting from 0). Modify items by directly assigning new values to an index.

let fruits = ["apple", "banana", "cherry"];

// Accessing elements
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"

// MODIFYING AN ELEMENT
fruits[1] = "orange";
console.log(fruits); // ["apple", "orange", "cherry"]


// 4. FINDING THE INDEX ITEMS IN AN ARRAY 

// The indexOf() method returns the index of the first occurrence of a specified item in the array. If the item isn’t found, it returns -1.

let fruits = ["apple", "banana", "cherry"];

// Finding index of an item
console.log(fruits.indexOf("banana")); // 1 (index of "banana")
console.log(fruits.indexOf("grape"));  // -1 (not found)

// 5.ADDING AND REMOVING ARRAY ITEMS

// push() adds an element to the end of the array.

// pop() removes the last element.

// unshift() adds an element to the beginning.

// shift() removes the first element.

let fruits = ["apple", "banana", "cherry"];

// Adding an element at the end
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "cherry", "grape"]

// Removing the last element
fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]

// Adding an element at the beginning
fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "apple", "banana", "cherry"]

// Removing the first element
fruits.shift();
console.log(fruits); // ["apple", "banana", "cherry"]


// 6. ACESSING EVERY ITEM

// You can loop through the array to access each item. One common way is using forEach(), which runs a function for every item.




