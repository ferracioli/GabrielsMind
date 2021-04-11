/* Função que faz o processamento da entrada */
function processaArquivo(nomeEntrada, nomeSaida, matrix) {
    var input = document.getElementById(nomeEntrada);
    var output = document.getElementById(nomeSaida);

    if (input.files && input.files[0]) {

        var arquivo = input.files[0];
        // Aceita apenas arquivos do tipo .txt
        if(arquivo.type !== "text/plain") {
            input.value = "";
            alert("O arquivo selecionado não é texto puro, por favor, tente outro.");
        }

        // Faz a leitura do texto e salva em uma matrix
        else {
            // Variáveis usadas na geração da matriz
            var conteudoArquivo = '';
            var linhaLida = 0;
            var matrizCorreta = true; // Vale false quando existem entradas inválidas
            
            // Usamos o objeto da classe FileReader para ler o texto
            var reader = new FileReader();
            reader.onload = function(e) { 
                conteudoArquivo = e.target.result;
                output.textContent = conteudoArquivo;
                var qtdEntradas = Number.parseInt(document.getElementById("qtdEntradas").value);
                // Repete essa iteração para cada linha do arquivo
                conteudoArquivo.split('\n').forEach(function(line, i) {
                    if(matrizCorreta) {
                        var vals = line.trim().split(' ');
                        if(vals.length != qtdEntradas + 1) {
                            matrizCorreta = false;
                            input.value = "";
                            alert("A linha " + (linhaLida+1) + " da matriz tem " + vals.length + " coluna(s), a linha " + vals + ", e precisa ter "+ (qtdEntradas + 1)  +" colunas. (" +qtdEntradas + " de entrada + 1 de saída). Insira uma matriz válida. Certifique-se também de usar apenas espaços simples para separar os números");
                        }
                        else {
                            // Se possui alguma entrada que não seja número: mensagem de erro e rejeita o arquivo
                            for(var i = 0; i < vals.length; i++) {
                                if(Number.isNaN(parseFloat(vals[i]))) {
                                    matrizCorreta = false;
                                    input.value = "";
                                    alert("Existe algum valor inválido, por favor, use apenas números.");
                                }
                            }
                            if(matrizCorreta) {
                                // Linha válida: adiciona na matriz
                                matrizTemp = [];
                                matrizTemp.push(-1);
                                for(var i = 0; i < vals.length; i++)
                                    matrizTemp.push(parseFloat(vals[i]));
                                matrix.push(matrizTemp);
                            }
                        }
                    }
                    linhaLida++;
                })
            }
            // Se deu tudo certo, imprimimos a matriz
            if(matrizCorreta) {
                reader.readAsBinaryString(arquivo);
                console.log("Matriz lida a partir de " + nomeEntrada);
                console.log(matrix);
            }
        }
    }   
}

/* Função que gerencia o treinamento e teste do perceptron */
function perceptron(matrixTreino, matrixTeste) {
    
    // Variáveis usadas no treinamento
    var qtdEntradas = Number.parseInt(document.getElementById("qtdEntradas").value);
    var txAprendizado = document.getElementById("taxaAprendizagem").value;

    if(matrixTeste.length == 0 || matrixTreino.length == 0 || Number.isNaN(qtdEntradas) || Number.isNaN(txAprendizado)) {
        alert("Por favor, insira arquivos com pelo menos uma linha cada e entradas válidas.");
    }
    else {
        var pesos = [];

        var t0 = performance.now();
        var ciclos = treinaPerceptron(pesos, matrixTreino, qtdEntradas, txAprendizado);
        var t1 = performance.now();
        testaPerceptron(matrixTeste, qtdEntradas, pesos, t1-t0, ciclos);
    }
}

// Função responsável pela geração do vetor de pesos ideal
function treinaPerceptron(pesos, matrixTreino, qtdEntradas, txAprendizado) {

    // O peso do elemento tetha inicialmente é zero
    pesos.push(0);
    for (var i = 0; i < qtdEntradas; i++)
        pesos.push(Math.round(Math.random() * 1));
    console.log("Vetor de pesos inicial:");
    console.log(pesos);
    console.log("Quantidade casos para se treinar: " + matrixTreino.length);

    var ciclos = 0;
    var erro;

    // Faz um laço que refina os pesos
    do {
        // Enquanto tiver saídas diferentes das esperadas
        erro = false;
        // Repete para cada linha da matriz
        for(var i = 0; i < matrixTreino.length; i++) {
            var pAtivacao = soma(pesos, matrixTreino[i], qtdEntradas);
            var sinalSaida = ((pAtivacao >= 0) ? 1 : -1);
            // Se o sinal de saída é diferente do sinal esperado, mudamos os pesos e refazemos o laço
            if(sinalSaida != matrixTreino[i][qtdEntradas+1]) {
                erro = true;
                // Atualiza os pesos
                for(var j = 0; j < qtdEntradas + 1; j++)
                    pesos[j] += txAprendizado*(matrixTreino[i][qtdEntradas+1] - sinalSaida)*matrixTreino[i][j];
                    // pesos novos = pesos antigos + tx(saida esperada - minha saida)amostra
            }
        }
        ciclos++;
    } while(erro);
    return ciclos;
}

// Verifica se o treinamento deu certo fazendo testes com resultados conhecidos
function testaPerceptron(matrixTeste, qtdEntradas, pesos, tempo, ciclos) {
    // Usa o vetor de pesos que já foi regulado
    var acertos = 0;    


    for(var i = 0; i < matrixTeste.length; i++) {
        var pAtivacao = soma(pesos, matrixTeste[i], qtdEntradas);
        var sinalSaida = ((pAtivacao >= 0) ? 1 : -1);

        if(matrixTeste[i][qtdEntradas+1] == sinalSaida)
            acertos++;
        else
            console.log("Saida: "+sinalSaida+", no caso "+i+" resultado esperado: "+matrixTeste[i][qtdEntradas+1]);
    }

    resultado = "Resultados finais:<br><br>Vetor de pesos encontrado:<br>";
    for(var i = 1; i < qtdEntradas+ 1; i++)
        resultado += (pesos[i] + " * entrada " + i +"<br>");
    resultado += (pesos[0] + " * (-1)<br>");
    resultado += "<br>-----------------------<br>"; 

    resultado += acertos + "/" + 
    matrixTeste.length + " acertos<br>Tempo gasto para treinar a rede: " + tempo + 
    "ms<br>Iterações necessárias: " + ciclos;

    console.log(resultado);
    document.getElementById('resultado').innerHTML += resultado;

}


// Função que retorna o potencial de ativação
function soma(pesos, entradas, qtdEntradas) {
    var soma = 0;
    for(var i = 0; i < qtdEntradas + 1; i++)
        soma += pesos[i]*entradas[i];
    return soma;
}