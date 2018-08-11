class MaiorMenor{

    constructor(){
    }

    maior(){
        this.removerResultado();

        var div = document.createElement("div");
        div.id = "resultado";

        var numero1 = parseInt(document.getElementById("numero1").value);
        var numero2 = parseInt(document.getElementById("numero2").value);

        if(numero1 > numero2){
            div.innerText = " O maior numero eh: "+ numero1;
        }else{
            div.innerText = " O maior numero eh: "+ numero2;
        }

        document.body.appendChild(div);
        
    }

    menor(){
        this.removerResultado();

        var div = document.createElement("div");
        div.id = "resultado";

        var numero1 = parseInt(document.getElementById("numero1").value);
        var numero2 = parseInt(document.getElementById("numero2").value);

        if(numero1 < numero2){
            div.innerText = " O menor numero eh: "+ numero1;
        }else{
            div.innerText = " O menor numero eh: "+ numero2;
        }

        document.body.appendChild(div);
    }

    removerResultado(){
        var divResultado = document.getElementById("resultado");

        if(divResultado != null){
            divResultado.remove();
        }
        
    }


}

var maiorMenor = new MaiorMenor();