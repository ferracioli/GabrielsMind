// Imports de Js devem ser feitos no início do arquivo
import { products } from './products.js';
import { getCookie } from './getCookie.js';

// Gera a estrutura de cada produto
function buildList(product) {
    // Cria as tags de HTML
    const a = document.createElement("a");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const text1 = document.createElement("text1");
    const text2 = document.createElement("text2");

    const items = document.querySelector("#items-list");

    // Coloca o botão na lista
    items.append(a);

    // Coloca todos os textos dentro da única div do bloco
    div.append(img);
    div.append(text1);
    div.append(text2);

    // Coloca a div dentro da div principal
    a.append(div);

    a.setAttribute("href", "spotlight.html?id="+product.id);
    a.setAttribute("class", "no-hyperlink");
    div.setAttribute("Class", "vertical center cart-item");
    img.setAttribute("src", "../img/products/" + product.foto);
    text1.innerHTML = product.nome;
    text2.innerHTML = "<br>R$ " + product.preco;
};

function findProduct(id) {
    for(var j = 0; j < products.length; j++) {
        if(products[j].id == id)
            return products[j];
    }
    return null;
}

// Pega a lista de produtos do carrinho:
var carrinho_json = getCookie('cart');
var carrinho = JSON.parse(carrinho_json);
var price = 0;

for(var i = 0; i < carrinho.length; i++) {
    var carrinhoTemp = findProduct(carrinho[i]);
    price += carrinhoTemp.preco;
    buildList(carrinhoTemp);
}

document.getElementById("price").innerHTML = "Custo total: R$"+price.toFixed(2);