console.log("The even numbers between 0 and 100:");
for (let index = 0; index <= 100; index++) {
  let number = index % 2;
  if (number === 0) {
    console.log(index);
  }
}
