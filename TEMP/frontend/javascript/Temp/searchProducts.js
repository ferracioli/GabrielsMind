// Imports de Js devem ser feitos no início do arquivo
import { products } from './products.js';
import { getCookie } from './getCookie.js';

function buildList(product) {
    // Cria as tags de HTML
    const parent_div = document.createElement("div");
    const first_child = document.createElement("a");
    const second_child = document.createElement("div");
    const third_child = document.createElement("div");
    const miniature_img = document.createElement("img");
    const texto1 = document.createElement("text");
    const texto2 = document.createElement("text");
    const texto3 = document.createElement("text");
    const texto4 = document.createElement("text");
    const price = document.createElement("h2");
    const botao1 = document.createElement("button");
    const botao2 = document.createElement("button");

    const items = document.querySelector("#items");

    // Coloca a div inteira dentro do id Items (hierarquia geral)
    items.append(parent_div);

    // Coloca a imagem dentro da primeira div filha
    first_child.append(miniature_img);

    // Coloca todos os textos dentro da segunda div filha
    second_child.append(texto1);
    second_child.append(texto2);
    second_child.append(texto3);
    second_child.append(texto4);

    // Coloca o preço e os botões dentro da terceira div filha
    third_child.append(price);
    third_child.append(botao1);
    third_child.append(botao2);

    // Coloca as três divs dentro da div principal
    parent_div.append(first_child);
    parent_div.append(second_child);
    parent_div.append(third_child);

    // Adiciona classes, estilo e texto às tags e outros atributos
    parent_div.setAttribute("class", "products responsive-user-crud");
    second_child.setAttribute("Class", "vertical");
    third_child.setAttribute("Class", "vertical end");
    third_child.setAttribute("Style", "Margin:0");
    miniature_img.setAttribute("src", "../img/products/" + product.foto);
    miniature_img.setAttribute("style", "width: 140px;height: 140px;");

    first_child.setAttribute("href", "spotlight.html?id="+product.id);
    texto1.setAttribute("Class", "text");
    texto2.setAttribute("Class", "text");
    texto3.setAttribute("Class", "text");
    texto4.setAttribute("Class", "text");
    texto1.innerHTML = "<b>Nome:</b> " + product.nome;
    texto2.innerHTML = "<b>Jogo:</b> " + product.jogo;
    texto3.innerHTML = "<b>Disponívels:</b> " + product.disponiveis;
    texto4.innerHTML = "<b>Descrição:</b> " + product.descricao;
    price.innerHTML = "R$" + product.preco.toFixed(2);
    price.setAttribute("Class", "text black");
    price.setAttribute("Style", "margin: 10px 15px;");
    botao1.innerHTML = "Comprar";
    botao1.setAttribute("Class", "buy_skin");
    //botao1.setAttribute("Onclick", "onclick=window.location.href = 'carrinho.html';");
    botao2.innerHTML = "Adicionar ao carrinho";
    botao2.setAttribute("Class", "spot_edit");
    //botao2.setAttribute("Onclick", "alert('Produto adicionado ao carrinho com sucesso!');");

    botao1.onclick=function(){
        var json_cart = getCookie('cart');
        var cart = JSON.parse(json_cart);
        // Adiciona o id do novo produto
        cart.push(product.id);
        // Atualiza o cookie
        var cart_json = JSON.stringify(cart);
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";

        window.location.href = "../html/carrinho.html";
    }

    botao2.onclick = function(){
        var json_cart = getCookie('cart');
        var cart = JSON.parse(json_cart);
        // Adiciona o id do novo produto
        cart.push(product.id);
        // Atualiza o cookie
        var cart_json = JSON.stringify(cart);
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";
    }
};


var url_string = window.location.href;
var url = new URL(url_string);

var name = url.searchParams.get("name");
var game = url.searchParams.get("game");
var datetime = url.searchParams.get("datetime");

if(datetime && datetime == "new") {
    // Imprime dos novos para os mais antigos
    for(var i = products.length-1; i >= 0; i--) {

        // Filtra caso tenha algum jogo específico
        if(game && game != "all") {
            if(products[i].jogo != game)
                continue;
        }

        // Filtra se tiver busca por um nome específico
        if(name && name != "") {
            if(!products[i].nome.includes(name))
                continue;
        }

        buildList(products[i]);
    }
}
else {
    // Se não tem filtro de data ou é o filtro dos mais antigos
    for(var i = 0; i < products.length; i++) {

        // Filtra caso tenha algum jogo específico
        if(game && game != "all") {
            if(products[i].jogo != game)
                continue;
        }

        // Filtra se tiver busca por um nome específico
        if(name && name != "") {
            if(!products[i].nome.includes(name))
                continue;
        }

        buildList(products[i]);
    }
}
