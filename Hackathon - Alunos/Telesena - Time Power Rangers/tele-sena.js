class Sortear{
 constructor(){
     this.lista=[];
 } 
   sortear(){   
    this.remover();
    this.remover();   
    this.lista=[];
      for(var contador1 = 0;contador1<=9;contador1++){
        this.lista.push(Math.floor(Math.random() * 10));       
          }
          this.adicionarNumeros();
          this.menosPontos();
        }
        
    
    adicionarNumeros(){
        var adicionarNumeros = document.createElement("div");
        adicionarNumeros.id="adicionarNumeros";   
        var label = document.createElement("h1");
        label.id="label";          
        label.innerText = ("mais pontos");
        adicionarNumeros.appendChild(label);       
        for(var contador1= 0;contador1<=9;contador1++){            
            var divFilha = document.createElement("div");
            divFilha.id="divFilha";

            divFilha.innerText = this.lista[contador1];
            adicionarNumeros.appendChild(divFilha);
        }
        document.body.appendChild(adicionarNumeros);
   }
   menosPontos(){
  
    var adicionarNumeros = document.createElement("div");
    adicionarNumeros.id="adicionarNumeros"; 
    var label = document.createElement("h1");
    label.id="label";          
    label.innerText = ("menos pontos");
    adicionarNumeros.appendChild(label); 
    for(var contador1 = 9;contador1>=0;contador1--){ 
        var divFilha = document.createElement("div");
        divFilha.id="divFilha";
        divFilha.innerText = this.lista[contador1];
        adicionarNumeros.appendChild(divFilha);
    }
    document.body.appendChild(adicionarNumeros);
  
                  
    }
    remover(){
        var remover = document.getElementById("adicionarNumeros");
        if(remover){
            remover.remove();

        }
    }

}
var lista = new Sortear;