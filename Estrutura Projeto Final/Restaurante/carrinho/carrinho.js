class CarrinhoController{
    constructor(){
        this.produtos=[];
    }

    adicionar(produto){
        this.produtos.push(produto);
        window.localStorage.setItem(
            "carrinho",
            JSON.stringify(this.produtos)
        );
    }

    getCarrinho(){
        return JSON.parse(
             window.localStorage.getItem("carrinho")
        );
    }

}