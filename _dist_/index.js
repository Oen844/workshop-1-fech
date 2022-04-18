/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :) -----------)");
const url = "https://platzi-avo.vercel.app/api/avo";
const base_url = "https://platzi-avo.vercel.app/";

const appNode = document.querySelector('#app');

window
  .fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
      //crear imagen
      const image = document.createElement("img");
      image.src = base_url + item.image;
      //crear titulo
      const title = document.createElement("h2");
      title.textContent = item.name;
      //crear preio
      const price = document.createElement("div");
      price.textContent = item.price;

      const container = document.createElement("div");

      container.append(image, title, price);

      allItems.push(container);
    });
    appNode.append(...allItems);
  });
