class Sorteio{
    constructor(){
        this.listaMaisPontos = [];
        this.listaMenosPontos = [];
    }

    sortear(){
        this.removerResultado();
        this.maisPontos();
        this.menosPontos();
        this.exibirResultado();
    }

    maisPontos(){
        
        for(var i=0; i< 10;i++){
            this.listaMaisPontos[i] = Math.floor(Math.random() * 10);
        }
        
    }

    menosPontos(){
        var indexMenosPontos = 0;
         
        for(var i=this.listaMaisPontos.length-1; i>=0; i--){
            
            this.listaMenosPontos[indexMenosPontos] = this.listaMaisPontos[i];
            indexMenosPontos++;
            

        }        
    }

    exibirResultado(){

        var divResultado = document.createElement("div");
        divResultado.id = "resultado";

        var divMaisPontos = document.createElement("div");
        divMaisPontos.className = "pontos";
        var maisPontosH1 =  document.createElement("h3");
        maisPontosH1.innerText = "Mais Pontos"
        divMaisPontos.appendChild(maisPontosH1);

        var divMenosPontos = document.createElement("div");
        divMenosPontos.className = "pontos";

        var menosPontosH1 =  document.createElement("h3");
        menosPontosH1.innerText = "Menos Pontos"
        divMenosPontos.appendChild(menosPontosH1);

        for(var i=0; i<this.listaMaisPontos.length; i++){
            var divNumero = document.createElement("div");
            divNumero.className = "numeroSorteado";
            divNumero.innerText = this.listaMaisPontos[i];
            divMaisPontos.appendChild(divNumero);
        }

        divResultado.appendChild(divMaisPontos);

        for(var i=0; i<this.listaMenosPontos.length; i++){
            var divNumero = document.createElement("div");
            divNumero.className = "numeroSorteado";
            divNumero.innerText = this.listaMenosPontos[i];
            divMenosPontos.appendChild(divNumero);
        }

        divResultado.appendChild(divMenosPontos);

        document.body.appendChild(divResultado);
    }

    removerResultado(){
        var divResultado = document.getElementById("resultado");
        if(divResultado != null){
            divResultado.remove();
        }
    }
}

let sorteio = new Sorteio();
