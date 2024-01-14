log = console.log;

const getData = async (requestURL) => {
  try {
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error(`Failed to fecth data. Status: ${response.status}`);
    }
    const data = await response.json();
    log(data);
  } catch (error) {
    log(error.message);
    throw error;
  }
};

getData(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.jsn"
);
