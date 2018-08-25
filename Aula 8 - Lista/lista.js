class Lista{

    
    constructor(){
        
        this.lista = [];
        this.listaImpar =[];
        this.listaPar =[];

        setTimeout(()=>{
            this.desabilitarBotoes();
        },50);
        
    }

    adicionar(){
        if(document.getElementById("numero").value != ""){
            var numero = parseInt(document.getElementById("numero").value);
            this.lista.push(numero);
            this.exibirLista(this.lista);
            document.getElementById("numero").value = "";
            if(this.lista.length > 1){
                this.habilitarBotoes();
            }
            
        }
    }

    ordenar(){
        for(var i = 0; i<this.lista.length; i++){
            for(var j = 0; j<this.lista.length; j++){

                if(this.lista[j] > this.lista[j + 1]){
                    var aux = this.lista[j];
                    this.lista[j] = this.lista[j+1];
                    this.lista[j+1] = aux;
                }
            }
        }

        this.exibirLista(this.lista);
    }

    impar(){
        this.listaImpar = [];
        for(var j = 0; j<this.lista.length; j++){
            if(this.lista[j] % 2 > 0){
                this.listaImpar.push(this.lista[j]);
            }
        }

        this.exibirLista(this.listaImpar);
    }

    par(){
        this.listaPar = [];
        for(var j = 0; j<this.lista.length; j++){
            if(this.lista[j] % 2 == 0){
                this.listaPar.push(this.lista[j]);
            }
        }

        this.exibirLista(this.listaPar);
    }

    exibirLista(lista){
        this.removerLista();
        var div = document.createElement("div");
        div.id="lista";

        for(var i = 0; i<lista.length; i++){
            var numeroDiv = document.createElement("div");
            numeroDiv.innerText = lista[i];
            div.appendChild(numeroDiv);
        }

        document.body.appendChild(div);
    }

    removerLista(){
        var lista = document.getElementById("lista");
        if(lista != null){
            lista.remove();
        }
    }


    desabilitarBotoes(){
        document.getElementById("ordenar").disabled = true;
        document.getElementById("impar").disabled = true;
        document.getElementById("par").disabled = true;
    }

    habilitarBotoes(){
        document.getElementById("ordenar").disabled = false;
        document.getElementById("impar").disabled = false;
        document.getElementById("par").disabled = false;
    }
}
let lista = new Lista();