log = console.log;

const getData = async (requestURL) => {
  try {
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    // const data = await response.json();

    const dataText = await response.text();
    const dataParsed = JSON.parse(dataText);
    log(dataText);
    // log(data);
    return dataParsed;
  } catch (error) {
    log(error.message);
    throw error;
  }
};

const populateHeader = (dataObj) => {
  const header = document.querySelector("header");
  const h1 = document.createElement("h1");
  h1.textContent = dataObj.squadName;
  const p = document.createElement("p");
  p.textContent = `Hometown: ${dataObj.homeTown}. Formed: ${dataObj.formed}`;
  header.append(h1, p);
};

const populateSection = (dataObj) => {
  const section = document.querySelector("section");
  const heroes = dataObj.members;

  for (const hero of heroes) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const myList = document.createElement("ul");

    h2.textContent = hero.name;
    p1.textContent = `Secret identity: ${hero.secretIdentity}`;
    p2.textContent = `Age: ${hero.age}`;
    p3.textContent = "Superpowers:";

    hero.powers.forEach((power) => {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    });

    article.append(h2, p1, p2, p3, myList);
    section.append(article);
  }
};

const populateHeaderErr = () => {
  const header = document.querySelector("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Error getting data";
  header.append(h1);
};

const populate = async (requestURL, headerFn, sectionFn) => {
  try {
    const data = await getData(requestURL);

    headerFn(data);
    sectionFn(data);
  } catch (error) {
    populateHeaderErr();
  }
};

populate(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  populateHeader,
  populateSection
);
