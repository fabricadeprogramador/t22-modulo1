class CarroController{
    constructor(){
        this.carros = new Array();
        this.carrinho = new CarrinhoController();
        console.log(this.carrinho);
    }

    carregarAnuncio(){

        var carrosLocalStorage = 
        JSON.parse(window.localStorage.getItem("carros"));
        
        if(carrosLocalStorage != null){
            this.carros = carrosLocalStorage;
        }else{
            this.carros = carroJson;
        }        
        //Salvando a lista de carros no localStorage
        window.localStorage.setItem("carros",JSON.stringify(this.carros));
        
        //Simulando o cadastro de um novo carro
        var carro = new Carro();
        carro.nome = "Kennedy";
        carro.foto = "data:image/jpeg;base64,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"

        this.carros.push(carro);


        window.localStorage.setItem("carros",JSON.stringify(this.carros));

        //Funcao que chama o anunciar carro para exibir os anuncios na tela
        for (let i = 0; i < this.carros.length; i++) {
            this.anunciarCarro(this.carros[i],this.carrinho);
            
        }

        
    }

    //Passar como parametro o carro selecionado e o carrinho para poder motar o onclick
    anunciarCarro(carro,carrinho){

        var div = document.createElement("div");
        div.className="carro";

        var img = document.createElement("img");
        img.src = carro.foto;

        div.appendChild(img);


        var fabricante = document.createElement("span");
        fabricante.className = "fabricante";
        fabricante.innerText = carro.fabricante;
        div.appendChild(fabricante);

        var nome = document.createElement("span");
        nome.className = "nome";
        nome.innerText = carro.nome;
        div.appendChild(nome);

        var divAnoKm = document.createElement("div");
        divAnoKm.className = "anoKm";
        var anoFabricacao = document.createElement("span");
        anoFabricacao.className="ano";
        anoFabricacao.innerText = "Ano " + carro.anoFabricacao;
        divAnoKm.appendChild(anoFabricacao);

        
        var km = document.createElement("span");
        km.innerText = carro.km + " KM";
        km.className="km";
        divAnoKm.appendChild(km);
        div.appendChild(divAnoKm);

        var divCorPorta = document.createElement("div");
        divCorPorta.className = "CorPorta";

        var cor = document.createElement("span");
        cor.className="cor";
        cor.innerText = "Cor: " + carro.cor;
        divCorPorta.appendChild(cor);

        var quantidadePortas = document.createElement("span");
        quantidadePortas.innerText = carro.quantidadePortas + " Portas";
        quantidadePortas.className="porta";

        divCorPorta.appendChild(quantidadePortas);
        div.appendChild(divCorPorta);


        var divPreco = document.createElement("div");
        divPreco.className="preco";


        var preco = document.createElement("span");
        preco.innerText = "R$: " + carro.preco;
        preco.className="preco";
        divPreco.appendChild(preco);
        div.appendChild(divPreco);
        
        var botao = document.createElement("button");
        
        botao.onclick = function(){
            carrinho.adicionar(carro);
        } 

        botao.innerText = "Adicionar";

        //Comentado para nao aparecer na tela, apenas exemplo
        //div.appendChild(botao);

        document.getElementById("anuncio").appendChild(div);

    }
}

let carroController = new CarroController();