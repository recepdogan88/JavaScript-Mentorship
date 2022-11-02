const x = Number(prompt("Enter 1. number", 0));
const y = Number(prompt("Enter 2. number", 0));
const z = Number(prompt("Enter 3. number", 0));

if (x > y && y > z) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " x > y > z");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " x > y > z");
} else if (x > z && z > y) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " x > z > y");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " x > z > y");
} else if (y > x && x > z) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " y > x > z");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " y > x > z");
} else if (y > z && z > x) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " y > z > x");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " y > z > x");
} else if (z > x && x > y) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " z > x > y");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " z > x > y");
} else if (z > y && y > x) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " z > y > x");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " z > y > x");
} else if (x === y && y > z) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " x = y > z");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " x = y > z");
} else if (z > x && x === y) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " z > x = y");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " z > x = y");
} else if (z === x && x > y) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " x = z > y");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " x = z > y");
} else if (y > x && x === z) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " y > x = z");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " y > x = z");
} else if (y === z && z > x) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " y = z > x");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " y = z > x");
} else if (x > y && y === z) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " x > y = z");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " x > y = z");
} else if (x === y && y === z) {
  alert("x = " + x + ", y = " + y + ", z = " + z + " and " + " x = y = z");
  console.log("x = " + x + ", y = " + y + ", z = " + z + " and " + " x = y = z");
}
