// Imports de Js devem ser feitos no início do arquivo
import { products } from './products.js';

// Gera a estrutura de cada produto
function buildList(product) {
    // Cria as tags de HTML
    const a = document.createElement("a");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const img = document.createElement("img");
    const text = document.createElement("text");

    const items = document.querySelector("#products");

    // Coloca o botão na lista
    items.append(a);

    // Coloca todos os textos dentro da única div do bloco
    div.append(span);
    div.append(img);
    div.append(text);

    // Coloca a div dentro da div principal
    a.append(div);

    a.setAttribute("href", "spotlight.html?id="+product.id);
    div.setAttribute("Class", "card");
    span.innerHTML = product.jogo;
    img.setAttribute("src", "../img/products/" + product.foto);
    text.innerHTML = product.nome+ "<br>R$ " + product.preco.toFixed(2);

};

// Gera uma lista crescente com o número de vendas de cada produto
var sold = [];
for(var i = 0; i < products.length; i++)
    sold.push(products[i].vendidos);
sold.sort((a, b) => a - b);
console.log(sold);

// Imprime os quatro produtos com mais vendas no site (não necessáriamente de forma ordenada)
for(var i = 0, cont = 0; i < products.length && cont < 4; i++) {
    if(products[i].vendidos >= sold[sold.length-4]) {
        cont++;
        buildList(products[i]);
    }
}