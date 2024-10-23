function changeMode() {
    var navbar = document.getElementById("navbar");
    var modeIconElement = document.getElementById("change-mode");
    
    // Verifica se o navbar e o modo foram encontrados
    if (!navbar || !modeIconElement) {
        console.error("Navbar ou Change-Mode não encontrados.");
        return;
    }
    
    var modeIcon = modeIconElement.getAttribute("src");
    console.log("Ícone atual: " + modeIcon);

    if (navbar.classList.contains("dark-navbar")) {
        // Ativa o Light mode

        // Muda o cabeçalho
        navbar.setAttribute("class", "light-navbar");
        modeIcon = modeIcon.replace("Light", "Dark");
        console.log("Agora é " + modeIcon);
        modeIconElement.setAttribute("src", modeIcon);
        
        // Verifica e modifica os elementos conforme necessário
        var pageName = document.getElementById("page-name");
        if (pageName) pageName.setAttribute("class", "black");

        var button1 = document.getElementById("button-1");
        var button2 = document.getElementById("button-2");
        var button3 = document.getElementById("button-3");
        
        if (button1) button1.setAttribute("class", "header-link light-header-link black");
        if (button2) button2.setAttribute("class", "header-link light-header-link black");
        if (button3) button3.setAttribute("class", "header-link light-header-link black");

        // Muda o corpo do texto
        var pageBody = document.getElementById("page-body");
        if (pageBody) pageBody.setAttribute("class", "vertical center white-background transition");
        
        var intro = document.getElementById("intro");
        if (intro) intro.setAttribute("class", "black");
        
        var easterEgg = document.getElementById("easter-egg");
        if (easterEgg) easterEgg.setAttribute("class", "white transition");

        // Inverter classes black/white dentro de #class_list e seus descendentes
        var elements = document.querySelectorAll("#classes_list div .white");
        elements.forEach(function(el) {
            el.setAttribute("class", "black");
        });

    } else {
        // Ativa o Dark mode

        // Muda o cabeçalho
        navbar.setAttribute("class", "dark-navbar");
        modeIcon = modeIcon.replace("Dark", "Light");
        console.log("Agora é " + modeIcon);
        modeIconElement.setAttribute("src", modeIcon);

        var pageName = document.getElementById("page-name");
        if (pageName) pageName.setAttribute("class", "white");

        var button1 = document.getElementById("button-1");
        var button2 = document.getElementById("button-2");
        var button3 = document.getElementById("button-3");
        
        if (button1) button1.setAttribute("class", "header-link dark-header-link white");
        if (button2) button2.setAttribute("class", "header-link dark-header-link white");
        if (button3) button3.setAttribute("class", "header-link dark-header-link white");

        // Muda o corpo do texto
        var pageBody = document.getElementById("page-body");
        if (pageBody) pageBody.setAttribute("class", "vertical center black-background transition");
        
        var intro = document.getElementById("intro");
        if (intro) intro.setAttribute("class", "white");
        
        var easterEgg = document.getElementById("easter-egg");
        if (easterEgg) easterEgg.setAttribute("class", "black transition");

        // Inverter classes black/white dentro de #class_list e seus descendentes
        var elements = document.querySelectorAll("#classes_list div .black");
        elements.forEach(function(el) {
            el.setAttribute("class", "white");
        });
    }
}
