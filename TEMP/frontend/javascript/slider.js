// Configura para só mostrar o primeiro slide (se não, mostra todos de uma vez)
var slide_atual = 1;
mostraSlide(slide_atual);

// Faz a soma do slide atual com o salto (se for negativo, voltará os slides)
function saltaSlide(salto) {
    mostraSlide(slide_atual += salto);
}

// Troca diretamente para o slide do salto
function slideAtual(salto) {
    mostraSlide(slide_atual = salto);
}

// Vai diretamente para o slide do salto e esconde os outros
function mostraSlide(salto) {
    var i;
    // Salva todos os slides no vetor slide
    var slides = document.getElementsByClassName("pagina-individual");
    // Se o salto passar do limite, volta para o primeiro
    if (salto > slides.length) {
        slide_atual = 1;
    }
    // Se o slide vai para antes do primeiro, pula para o último
    if (salto < 1) {
        slide_atual = slides.length;
    }
    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deixa visível apenas o slide escolhido
    slides[slide_atual - 1].style.display = "block";
}