function abreVideo() {
    var playerDoSpotlight = document.getElementById("spotlightVideo");
    // Mostra o vídeo e o contorno para poder fechá-lo
    document.getElementById('popup').style.display = 'block';
    document.getElementById('fechaVideo').style.display = 'block';
    // Inicia o vídeo
    playerDoSpotlight.play();
}
  
function fechaVideo() {
    // Esconde o vídeo e o contorno para poder fechá-lo
    var playerDoSpotlight = document.getElementById("spotlightVideo");
    document.getElementById('popup').style.display = 'none';
    document.getElementById('fechaVideo').style.display = 'none';
    // Reinicia o vídeo
    playerDoSpotlight.currentTime = 0;
    playerDoSpotlight.load();
}