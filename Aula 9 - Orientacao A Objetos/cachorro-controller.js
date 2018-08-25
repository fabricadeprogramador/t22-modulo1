class CachorroController{
    constructor(){
        this.cachorro = new Cachorro();
        
    }

    salvar(){
        this.cachorro.nome = document.getElementById("nome").value;
        this.cachorro.tamanho = document.getElementById("tamanho").value;
        
        
    }

    latir(){
        this.cachorro.latir();
    }

    lamber(){
        this.cachorro.lamber();
        
    }
}

let cachorroController = new CachorroController();