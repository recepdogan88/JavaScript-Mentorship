const number = Number(prompt("Enter a number between 0 and 100", 0));

if (number >= 0 && number <= 100) {
  const y = number % 2;
  if (y === 0) {
    alert(number + " is even");
    console.log(number + " is even");
  } else {
    alert(number + " is odd");
    console.log(number + " is odd");
  }
} else if (number < 0 || number > 100) {
  alert("Number must be between 0 and 100!");
} else if (typeof number !== Number) {
  alert("Please enter a number!");
}
