log = console.log;

const populate = async () => {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);
  log(request);
};

populate();
