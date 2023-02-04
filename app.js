

console.log("Ready")


const header = document.querySelector("#header");
const main = document.querySelector("#main");
const footer = document.querySelector("#footer");

const loadPartial = async (element, url) => {
  const response = await fetch(url);
  const partial = await response.text();
  element.innerHTML = partial;
};

loadPartial(header, "header.html");
loadPartial(main, "main.html");
loadPartial(footer, "footer.html");
