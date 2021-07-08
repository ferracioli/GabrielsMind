import { getCookie } from './getCookie.js';

// Função usada apenas para dar boas vindas
document.getElementById("greetings").innerHTML = "Olá, "+getCookie('username')+"! O que deseja fazer?";