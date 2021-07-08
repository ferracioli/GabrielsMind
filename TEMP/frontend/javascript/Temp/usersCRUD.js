// Imports de Js devem ser feitos no início do arquivo
import { users } from './users.js';

function buildList(user) {
    // Cria as tags de HTML
    const parent_div = document.createElement("div");
    const first_child = document.createElement("div");
    const second_child = document.createElement("div");
    const texto1 = document.createElement("text");
    const texto2 = document.createElement("text");
    const texto3 = document.createElement("text");
    const texto4 = document.createElement("text");
    const botao1 = document.createElement("button");
    const botao2 = document.createElement("button");

    const items = document.querySelector("#items");

    // Coloca a div inteira dentro do id Items (hierarquia geral)
    items.append(parent_div);

    // Coloca todos os textos dentro da segunda div filha
    first_child.append(texto1);
    first_child.append(texto2);
    first_child.append(texto3);
    first_child.append(texto4);

    // Coloca o preço e os botões dentro da terceira div filha
    second_child.append(botao1);
    second_child.append(botao2);

    // Coloca as duas divs dentro da div principal
    parent_div.append(first_child);
    parent_div.append(second_child);

    // Adiciona classes, estilo e texto às tags e outros atributos
    parent_div.setAttribute("class", "products responsive-user-crud");
    first_child.setAttribute("Class", "vertical");
    second_child.setAttribute("Class", "responsive-user-crud");
    second_child.setAttribute("Style", "margin:0;");

    texto1.setAttribute("Class", "text");
    texto2.setAttribute("Class", "text");
    texto3.setAttribute("Class", "text");
    texto4.setAttribute("Class", "text");
    texto1.innerHTML = "<b>Nome:</b> " + user.nome;
    texto2.innerHTML = "<b>Nome de usuário:</b> " + user.username;
    texto3.innerHTML = "<b>Email:</b> " + user.email;
    texto4.innerHTML = "<b>Função:</b> " + user.cargo;
    botao1.innerHTML = "Excluir";
    botao1.setAttribute("Class", "add_exclude");
    botao1.setAttribute("Onclick", "alert('O usuário será efetivamente removido na entrega 3!');");
    if(user.cargo == "Cliente") {
        botao2.innerHTML = "Tornar Admin";
    }
    else {
        botao2.innerHTML = "Remover Admin";
    }
    botao2.setAttribute("Class", "spot_edit");
    botao2.setAttribute("Onclick", "alert('O usuário será efetivamente promovido/rebaixado na entrega 3!');");
};

var url_string = window.location.href;
var url = new URL(url_string);

var name = url.searchParams.get("name");
var cargo = url.searchParams.get("cargo");
var datetime = url.searchParams.get("datetime");

if(datetime && datetime == "new") {
    // Imprime dos novos para os mais antigos
    for(var i = users.length-1; i >= 0; i--) {

        // Filtra caso tenha algum jogo específico
        if(cargo && cargo != "all") {
            if(users[i].cargo != cargo)
                continue;
        }

        // Filtra se tiver busca por um nome específico
        if(name && name != "") {
            if(!(users[i].nome.includes(name) || users[i].username.includes(name)) )
                continue;
        }

        buildList(users[i]);
    }
}
else {
    // Se não tem filtro de data ou é o filtro dos mais antigos
    for(var i = 0; i < users.length; i++) {

        // Filtra caso tenha algum jogo específico
        if(cargo && cargo != "all") {
            if(users[i].cargo != cargo)
                continue;
        }

        // Filtra se tiver busca por um nome específico
        if(name && name != "") {
            if(!(users[i].nome.includes(name) || users[i].username.includes(name)) )
                continue;
        }

        buildList(users[i]);
    }
}
