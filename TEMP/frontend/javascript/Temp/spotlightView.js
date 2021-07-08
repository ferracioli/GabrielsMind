// Imports de Js devem ser feitos no início do arquivo
import { products } from './products.js';
import { getCookie } from './getCookie.js';

function buildList(product) {
    document.getElementById("items").innerHTML =
    "<div class='responsive-user-crud individual'>"+

        "<div class='vertical'>"+
            "<img id='spotlightImage' src='../img/products/"+product.foto+"'>"+

            "<div id='popup'>"+
                "<video id='spotlightVideo' width='540' height='auto' controls>"+
                    "<source src='../media/"+product.spotlight+"' type='video/mp4'>"+
                "</video>"+
            "</div>"+
                
            "<div id='fechaVideo' onClick='fechaVideo();'></div>"+
            "<div>"+
                "<a id='spotlightButton' onclick='abreVideo();'>Ver spotlight</a>"+
            "</div>"+
        "</div>"+

        "<div class='vertical'>"+
            "<h3>"+product.nome+"</h3>"+
            "<h2>R$"+product.preco.toFixed(2)+"</h2>"+
            "<div id='spotlightOptions' class='horizontal'>"+
                "<button id='comprar' class='buy_skin' >Comprar</button>"+
                "<button id='addCarrinho' class='spot_edit'>Adicionar ao carrinho</button>"+
            "</div>"+
        "</div></div>"+

        "<div class = 'products'>"+
            "<div class='vertical'>"+
                "<text class='text'><b>Nome:</b>"+product.nome+"</text>"+
                "<text class='text'><b>Jogo:</b>"+product.jogo+"</text>"+
                "<text class='text'><b>Disponíveis:</b>"+product.disponiveis+"</text>"+
                "<text class='text'>"+product.descricao+"</text>"+
            "</div>"+
        "</div>"+

    "</div>";
    
    // Botão de comprar (adiciona e vai direto pro carrinho)
    var comprar = document.getElementById("comprar");
    comprar.onclick=function(){
        var json_cart = getCookie('cart');
        var cart = JSON.parse(json_cart);
        // Adiciona o id do novo produto
        cart.push(id);
        // Atualiza o cookie
        var cart_json = JSON.stringify(cart);
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";

        document.getElementById("addCarrinho").value = "Adicionado";
        console.log("Adicionado");

        window.location.href = "../html/carrinho.html";
    }

    // Botão de adicionar no carrinho
    var addCarrinho = document.getElementById("addCarrinho");
    addCarrinho.onclick = function(){
        var json_cart = getCookie('cart');
        var cart = JSON.parse(json_cart);
        // Adiciona o id do novo produto
        console.log(cart);
        cart.push(id);
        // Atualiza o cookie
        var cart_json = JSON.stringify(cart);
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";

        document.getElementById("addCarrinho").value = "Adicionado";
        console.log("Adicionado");
    }
}

var url_string = window.location.href;
var url = new URL(url_string);

var id = url.searchParams.get("id");

for(var i = 0; i < products.length; i++) {
    if(products[i].id == id) {
        
        buildList(products[i]);
        break;
    }
}