const month = prompt("Enter a month");
let season = "";

if (month === "june" || month === "july" || month === "august") {
  season = "summer";
} else if (month === "september" || month === "october" || month === "november") {
  season = "autumn";
} else if (month === "december" || month === "january" || month === "february") {
  season = "winter";
} else if (month === "march" || month === "april" || month === "may") {
  season = "spring";
}

alert("The season is " + season);
console.log("The season is " + season);
