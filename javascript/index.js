// Imports de Js devem ser feitos no início do arquivo
import { data } from './data.js';

const buildCard = career => {
    // Create elements needed to build a card
  const parent_div = document.createElement("div");
  const miniature_img = document.createElement("img");
  const child_div = document.createElement("div");
  const title = document.createElement("title");
  const datetime = document.createElement("datetime");
  const text = document.createElement("text");
  
  // Append newly created elements into the DOM
  const body = document.querySelector("body");
  
  body.append(parent_div);
  child_div.append(title);
  child_div.append(datetime);
  child_div.append(text);
  parent_div.append(miniature_img);
  parent_div.append(child_div);
  
  // Set content and attributes
  title.innerHTML = career.title;
  datetime.innerHTML = career.datetime;
  text.innerHTML = career.text;
  miniature_img.setAttribute("src", career.miniature_img);
  miniature_img.setAttribute("class", "miniature_img");
  parent_div.setAttribute("class", "horizontal center");
  child_div.setAttribute("class", "vertical center");
};

data.forEach(career => buildCard(career));
