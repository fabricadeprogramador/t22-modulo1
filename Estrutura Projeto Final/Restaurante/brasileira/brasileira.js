class BrasileiraController{
    constructor(){
        this.carrinho = new CarrinhoController();
        this.produtos = ['Feijoada','Churrasco'];
    }

    adicionar(indice){
        
        this.carrinho.adicionar(
            this.produtos[indice]
        );
        console.log(this.carrinho.getCarrinho());
        console.log(this.carrinho.getCarrinhoSem());
    }
}

let basileiraController = new BrasileiraController();