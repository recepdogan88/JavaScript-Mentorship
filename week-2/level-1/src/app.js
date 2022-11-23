import { personList } from "./data.js";
import { listNames } from "./functions.js";

const personArray = listNames(personList);
console.log("Person List:");
personArray.forEach((person) => {
  console.log(person);
});
