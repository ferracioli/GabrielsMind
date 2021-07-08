// Imports de Js devem ser feitos no início do arquivo
import { products } from './products.js';

function buildList(product) {

    // Monta o formulário de edição do produto
    document.getElementById("product").innerHTML =
        "<div class='vertical'>"+
            "<label class='text'>Imagem atual do produto:</label>"+
            "<text>"+product.foto+"</text><br>"+

            "<b class='text'>Alterar imagem:</b>"+
            "<input name='productFile' type='File'><br>"+

            "<label class='text'>Spotlight atual do produto:</label>"+
            "<text>"+product.spotlight+"</text><br>"+

            "<b class='text'>Alterar spotlight:</b>"+
            "<input name='spotlightFile' type='File'>"+
        "</div>"+

        "<div style='margin: 20px 0;' class='vertical'>"+

            "<div class='vertical'>"+
                "<label class='text gold'>Nome:</label>"+
                "<input style='width:300px;' class='text' type='text' title='nome' value='"+ product.nome +"'>"+
            "</div>"+
            "<div class='vertical'>"+
                "<label class='text gold'>Jogo:</label>"+
                "<select style='width:300px;' name='Jogo'>"+
                    "<option value = '"+product.jogo+"' selected>"+product.jogo+"</option>"+   
                    "<option value = 'League of Legends'>League of Legends</option>"+    
                    "<option value = 'Among Us'>Among Us</option>"+
                    "<option value = 'Overwatch'>Overwatch</option>"+
                    "<option value = 'Valorant'>Valorant</option>"+
                "</select>"+
            "</div>"+
            "<div class='vertical'>"+
                "<label class='text gold'>Descrição:</label>"+
                "<textarea style='width:300px;' rows='5' cols='60' name='description'>"+product.descricao+"</textarea>"+
            "</div>"+
            "<div class='vertical'>"+
                "<label class='text gold'>Estoque:</label>"+
                "<input style='width:300px;' class='text' type='text' title='estoque' value='"+product.disponiveis+"'>"+
            "</div>"+
            "<div class='vertical'>"+
                "<label class='text gold'>Preço:</label>"+
                "<input style='width:300px;' class='text' type='text' title='preco' value='"+product.preco.toFixed(2)+"'>"+
            "</div>"+
        "</div>";

};

var url_string = window.location.href;
var url = new URL(url_string);

var id = url.searchParams.get("id");

for(var i = products.length-1; i >= 0; i--) {
    if(products[i].id == id) {
        buildList(products[i]);
        break;
    }
}