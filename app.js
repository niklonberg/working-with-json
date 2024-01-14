log = console.log;

const getData = async (requestURL) => {
  try {
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    const data = await response.json();
    log(data);
    return data;
  } catch (error) {
    log(error.message);
    throw error;
  }
};

const populateHeader = (obj) => {
  const header = document.querySelector("header");
  const h1 = document.createElement("h1");
  h1.textContent = obj.squadName;
  const p = document.createElement("p");
  p.textContent = `Hometown: ${obj.homeTown}. Formed: ${obj.formed}`;
  header.append(h1, p);
};

const populateSection = (obj) => {};

const populate = async (requestURL, headerFn, sectionFn) => {
  const data = await getData(requestURL);

  headerFn(data);
  sectionFn(data);
};

populate(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  populateHeader,
  populateSection
);
