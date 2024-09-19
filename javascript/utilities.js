// Permite a troca entre Light mode e Dark mode
function changeMode() {
    
    var navbar = document.getElementById("navbar");

    var modeIcon = document.getElementById("change-mode").getAttribute("src");
    console.log("Ícone atual: " + modeIcon);

    if(navbar.classList.contains("dark-navbar")) {
        // Ativa o Light mode

        // Muda o cabeçalho
        navbar.setAttribute("class", "light-navbar");
        modeIcon = modeIcon.replace("Light", "Dark");
        console.log("Agora é " + modeIcon);
        document.getElementById("change-mode").setAttribute("src", modeIcon);
        document.getElementById("page-name").setAttribute("class", "black");
        document.getElementById("button-1").setAttribute("class", "header-link light-header-link black");
        document.getElementById("button-2").setAttribute("class", "header-link light-header-link black");
        document.getElementById("button-3").setAttribute("class", "header-link light-header-link black");

        // Muda o corpo do texto
        document.getElementById("page-body").setAttribute("class", "vertical center white-background transition");
        document.getElementById("intro").setAttribute("class", "black");
        document.getElementById("easter-egg").setAttribute("class", "white transition");
    }
    else {
        // Ativa o Dark mode

        // Muda o cabeçalho
        navbar.setAttribute("class", "dark-navbar");
        modeIcon = modeIcon.replace("Dark", "Light");
        console.log("Agora é " + modeIcon);
        document.getElementById("change-mode").setAttribute("src", modeIcon);
        document.getElementById("page-name").setAttribute("class", "white");
        document.getElementById("button-1").setAttribute("class", "header-link dark-header-link white");
        document.getElementById("button-2").setAttribute("class", "header-link dark-header-link white");
        document.getElementById("button-3").setAttribute("class", "header-link dark-header-link white");

        // Muda o corpo do texto
        document.getElementById("page-body").setAttribute("class", "vertical center black-background transition");
        document.getElementById("intro").setAttribute("class", "white");
        document.getElementById("easter-egg").setAttribute("class", "black transition");
    }
}