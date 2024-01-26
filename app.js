let resultadoTexto = "";

function botaoCriptografar() {
    resultadoTexto = "";
    var texto = document.getElementById("textInput").value;
    if (texto != "") {
        ocultarDisplay();
        if (document.getElementById("resultado").classList.contains("invisivel")) {
            mostrarDisplay();
        }
        textoCriptografado(texto);
    } else {
        mostrarInformacoes();
        ocultarInformacoes();
    }
    
    document.querySelector("#resultado textarea").value = resultadoTexto;
}

function botaoDescriptografar(){
    var texto = document.getElementById("textInput").value;
    if (texto != "") {
        ocultarDisplay();
        if (document.getElementById("resultado").classList.contains("invisivel")) {
            mostrarDisplay();
        }
        
    }  else {
        mostrarInformacoes();
        ocultarInformacoes();
    }
    document.querySelector("#resultado textarea").value = validarDescriptografia(texto);
}

function botaoCopiar(){
    let textArea = document.querySelector('.textResult');
    // document.querySelector('html').classList.toggle("dark");

    navigator.clipboard.writeText(textArea.value);
}

function ocultarDisplay(){
    document.getElementById("area__informacoes__nenhumamsg").style.display = "none";
}

function mostrarInformacoes() {
        document.getElementById("area__informacoes__nenhumamsg").style.display = "";
}

function mostrarDisplay(){
    document.getElementById("resultado").classList.toggle("invisivel");
}

function ocultarInformacoes(){
    document.getElementById("resultado").classList.add("invisivel");
}

function textoCriptografado(texto){
    texto.split("").forEach(element => {
        resultadoTexto += validarCriptografia(element);
    });
}

function validarCriptografia(letra){
    switch (letra) {
        case "e":
            return "enter";
        case "i":
            return "imes";
        case "a":
            return "ai";
        case "o":
            return "ober";
        case "u":
            return "ufat";            
        default:
            return letra;
    }
}

function validarDescriptografia(texto){
    let result = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return result;
}

