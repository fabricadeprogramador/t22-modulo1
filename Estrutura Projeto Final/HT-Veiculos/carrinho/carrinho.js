class CarrinhoController{
    constructor(){
        this.carros=[];
    }

    adicionar(carro){
        console.log(carro);
        console.log(this.carros);
        this.carros.push(carro);
        window.localStorage.setItem(
            "carrinho",
            JSON.stringify(this.carros)
        );
    }

    getCarrinho(){
        return JSON.parse(
             window.localStorage.getItem("carrinho")
        );
    }

}