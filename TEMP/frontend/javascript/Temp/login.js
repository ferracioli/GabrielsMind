// Imports de Js devem ser feitos no início do arquivo
import { users } from './users.js';
import { getCookie } from './getCookie.js';

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var flag = false;

    // Verifica se o usuário cadastrado está na base de dados    
    for(var i = 0; i < users.length; i++) {
        if(users[i].username == username && users[i].hash_senha == password) {
            // Apaga qualquer cookie que possa existir
            if(getCookie('username'))
                document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
            if(getCookie('cart'))
                document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
            if(getCookie('id'))
                document.cookie = 'id=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

            // Login bem sucedido, fazemos um cookie do id do usuário e do seu nome
            flag = true;
            // Os cookies duram uma hora no máximo
            var now = new Date();
            now.setTime(now.getTime() + 1 * 3600 * 1000);
            document.cookie = "username="+users[i].username+"; expires=" + now.toUTCString() + "; path=/";
            document.cookie = "id="+users[i].id+"; expires=" + now.toUTCString() + "; path=/";
            // O carrinho é configurado como cookie dentro de uma string JSON
            var cart = [];
            var cart_json = JSON.stringify(cart);
            document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";


            if(users[i].cargo == "Admin") {
                window.location.href = "../html/areaAdmin.html";
            }
            else {
                window.location.href = "../html/areaCliente.html?name="+users[i].username;
            }
                
        }
    }
    if(!flag)
        alert("Não foi possível fazer login, tente novamente!");
}

document.getElementById("loginButton").addEventListener("click", login);