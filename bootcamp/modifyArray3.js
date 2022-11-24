/**
Create a new formatted array by using the original array.(20mins)
let heroes= ["  avEnGers  ", "  cAptain ameRICA",”   spiderman”, " ironMAN   ", "  black pANther  "];
Output:
["Avengers", "Captain America",”Spiderman”, "Ironman", "Black Panther"]
 */
const heroes = ["  avEnGers  ", "  cAptain ameRICA", "   spiderman  ", " ironMAN", "  black pANther  "];
const cleanedHeroes = new Array();

for (let index = 0; index < heroes.length; index++) {
    cleanedHeroes.push(heroes[index].trim().toLowerCase());
}
// cleanedHeroes=['avengers','captain america','spiderman','ironman','black panther']
for (let index = 0; index < cleanedHeroes.length; index++) {
    let temp = cleanedHeroes[index];

    if (temp.split("").includes(" ")) {

        let multiWordsArr = temp.split(" ");

        for (let j = 0; j < multiWordsArr.length; j++) {
            multiWordsArr[j] = multiWordsArr[j].charAt(0).toUpperCase() + multiWordsArr[j].slice(1);
        }
        cleanedHeroes[index] = (multiWordsArr.join(" "));

    } else {
        cleanedHeroes[index] = temp.charAt(0).toUpperCase() + temp.slice(1);
    }
}
console.log(cleanedHeroes);