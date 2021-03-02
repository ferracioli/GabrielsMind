// Imports de Js devem ser feitos no início do arquivo
import { data } from './data.js';

const buildCard = career => {
    // Cria algumas tags de HTML a partir do objeto document e guarda em constantes
    const parent_div = document.createElement("div");
    const miniature_img = document.createElement("img");
    const child_div = document.createElement("div");
    const title = document.createElement("text");
    const datetime = document.createElement("text");
    const text = document.createElement("text");
    const link = document.createElement("a");

    // Obtem a tag de id career para colocar os elementos dentro
    const career_instance = document.querySelector("#career");

    // Monta a hierarquia HTML
    career_instance.append(parent_div);
    child_div.append(title);
    child_div.append(datetime);
    child_div.append(text);
    link.append(miniature_img);
    parent_div.append(miniature_img);
    parent_div.append(child_div);

    // Adiciona classes às tags e outros atributos
    title.innerHTML = career.title;
    datetime.innerHTML = career.datetime;
    text.innerHTML = career.text;
    parent_div.setAttribute("class", "horizontal center card");
    link.setAttribute("href", career.link);
    miniature_img.setAttribute("src", career.miniature_img);
    miniature_img.setAttribute("class", "miniature_img");
    child_div.setAttribute("class", "vertical center description");
    title.setAttribute("class", "important");
    datetime.setAttribute("class", "important");
    text.setAttribute("class", "backstory");
};

data.forEach(career => buildCard(career));
