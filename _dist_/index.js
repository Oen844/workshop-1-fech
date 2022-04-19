/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :) -----------)");
const url = "https://platzi-avo.vercel.app/api/avo";
const base_url = "https://platzi-avo.vercel.app/";

const appNode = document.querySelector("#app");

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};

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
      title.style = "font-size: 2rem;";
      title.className = "decoration-slate-900 text-red-600";
      //crear preio
      const price = document.createElement("div");
      price.style = "font-size: 1.2rem;font-weight: bold;";
      price.textContent = formatPrice(item.price);

      const container = document.createElement("div");

      container.className = "box-content h-55 w-42 p-4 border-4 my-9";

      container.append(image, title, price);

      allItems.push(container);
    });
    appNode.append(...allItems);
  });
