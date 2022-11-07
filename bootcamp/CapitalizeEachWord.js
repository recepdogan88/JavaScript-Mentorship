/**
Write a program that capitalizes the first letter of each word in a string.(15mins)
 */
const str = 'strings are immutable in javascript';

//split the above string into an array of strings 
//whenever a blank space is encountered
const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.
for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
    // arr[i] = arr[i].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}
//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);
// Strings Are Immutable In Javascript