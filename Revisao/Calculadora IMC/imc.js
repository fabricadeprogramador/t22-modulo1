 class Calcular {

    

    calcular(){
        this.remover();

        var peso = parseFloat(document.getElementById("peso").value);
        var altura = parseFloat(document.getElementById("altura").value);
        var resultado = document.createElement("div");
        resultado.id="resultado";

        resultado.innerText="seu imc " + (peso / (altura*altura)).toFixed(2);
        document.body.appendChild(resultado);
    }

    remover(){
        var divResultado = document.getElementById("resultado");

        if(divResultado != null){
            divResultado.remove();
        }

    }




 }
 var lista = new Calcular;
 