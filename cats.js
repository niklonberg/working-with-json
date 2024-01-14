const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => {
    return response.text();
  })
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  console.log(catString);
  let totalKittens = 0;
  let male = 0;
  let female = 0;

  // Add your code here
  const cats = JSON.parse(catString);
  cats.forEach((cat, index, array) => {
    console.log(cat);
    totalKittens += cat.kittens.length;
    cat.kittens.forEach((kitten) => {
      kitten.gender === "m" ? (male += 1) : (female += 1);
    });
    index === array.length - 1
      ? (motherInfo += `and ${cat.name}.`)
      : (motherInfo += `${cat.name}, `);
  });

  kittenInfo = `Total kittens: ${totalKittens}, male: ${male}, female: ${female}`;
  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
