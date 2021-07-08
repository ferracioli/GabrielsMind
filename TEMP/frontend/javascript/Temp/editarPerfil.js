// Imports de Js devem ser feitos no início do arquivo
import { users } from './users.js';
import { getCookie } from './getCookie.js';

function buildList(user) {
    document.getElementById("registrer-form").innerHTML =
    "<div class='vertical center'>"+

    "<div class='responsive-form'>"+
        "<div class='vertical'>"+
            "<label class='text'>Nome e Sobrenome</label>"+
            "<input name='Name' class='text' type='text' title='Name'  value = '"+user.nome+"'>"+
        "</div>"+
        
        "<div class='horizontal-space'></div>"+
        
        "<div class='vertical'>"+
            "<label class='text'>Nome de Usuário</label>"+
            "<input name='username' class='text' type='text' title='Username'  value = '"+user.username+"'>"+
        "</div>"+
    "</div>"+

    "<div class='responsive-form'>"+
        "<div class='vertical'>"+
            "<label class='text'>Email</label>"+
            "<input name='email' class='text' type='text' title='email'  value = '"+user.email+"'>"+
        "</div>"+
        
        "<div class='horizontal-space'></div>"+
        
        "<div class='vertical'>"+
            "<label class='text'>Telefone</label>"+
            "<input name='phone' class='text' type='text' title='phone' value = '"+user.telefone+"'>"+
        "</div>"+
    "</div>";

    if(user.cargo == "Cliente") {
    
        document.getElementById("registrer-form").innerHTML +=
        "<div class='vertical'>"+
            "<label class='text'>Logradouro</label>"+
            "<input class='text' type='text' name='adress' value = '"+user.logradouro+"'>"+
        "</div>"+

        "<div class='responsive-form'>"+
            "<div class='vertical'>"+
                "<label class='text'>Número</label>"+
                "<input class='text' type='text' name='number'  value = '"+user.numero+"'>"+
            "</div>"+
            
            "<div class='horizontal-space'></div>"+
            
            "<div class='vertical'>"+
                "<label class='text'>Complemento</label>"+
                "<input class='text' type='text' name='complement' value = '"+user.complemento+"'>"+
            "</div>"+
        "</div>";
    }

    document.getElementById("registrer-form").innerHTML +=
    "<div class='responsive-form'>"+
        "<div class='vertical'>"+
            "<label class='text'>Senha</label>"+
            "<input name='password' class='text' type='password' title='password' value='"+user.hash_senha+"'>"+
        "</div>"+

        "<div class='horizontal-space'></div>"+
        
        "<div class='vertical'>"+
            "<label class='text'>Confirmar senha</label>"+
            "<input name='password2' class='text' type='password' title='password2' value='"+user.hash_senha+"'>"+
        "</div><br>"+
    "</div>";
}

var id = getCookie('id');

for(var i = users.length-1; i >= 0; i--) {
    if(users[i].id == id) {
        buildList(users[i]);
        break;
    }
}