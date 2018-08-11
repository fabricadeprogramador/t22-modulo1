class Media{

    constructor(){
        this.lista=[];
        
    }

    adicionar(){
        var numero = parseInt(document.getElementById("numero").value);
        this.lista.push(numero);
        this.limparCampo();
    }

    calcularMedia(){
        var soma = 0;
        var media = 0;
        
        for(var i=0; i < this.lista.length; i++){
            soma += this.lista[i];  
        }

        
        media = soma/this.lista.length;
        this.exibirResultado(media);

    }

    limparCampo(){
        document.getElementById("numero").value = "";
    }

    exibirResultado(media){
        this.removerResultado();
        var divResultado = document.createElement("div");
        divResultado.id="resultado";
        divResultado.innerText = "A media eh: "+ media;
        document.body.appendChild(divResultado);

    }

    removerResultado(){
        var divResultado = document.getElementById("resultado");

        if(divResultado != null){
            divResultado.remove();
        }
        
    }
}
var media = new Media();