// Imports de Js devem ser feitos no início do arquivo
import { table } from './brainBoyData.js';

const buildRow = row => {
    // Cria algumas tags de HTML a partir do objeto document e guarda em constantes
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    // Obtem a tag de id career para colocar os elementos dentro
    const table_content = document.querySelector("#table");

    // Monta a hierarquia HTML
    table_content.append(tr);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    // Adiciona classes às tags e outros atributos
    td1.innerHTML = row.name;
    td2.innerHTML = row.region;
    if(row.worked) {
        td3.innerHTML = "√";
        td3.setAttribute("style", "color: green;");
    }
    else {
        td3.innerHTML = "X";
        td3.setAttribute("style", "color: red;");
    }
    td4.innerHTML = row.space;

    /* Blocos gerados com a build:
        <tr>
            <td>Nome do jogo</td>
            <td>Região</td>
            <td>Sim/Não</td>
            <td>Blocos do jogo</td>
        </tr>
    */
};

table.forEach(row => buildRow(row));
