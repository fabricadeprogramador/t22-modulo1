class CarroController{
    constructor(){
        this.carros = new Array();
        
    }

    carregarAnuncio(){
        this.carros = caminhonete;
        console.log(this.carros.length);
        for (let i = 0; i < this.carros.length; i++) {
            this.anunciarCarro(this.carros[i]);
            
        }
    }
    anunciarCarro(carro){

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
        

        document.getElementById("anuncio").appendChild(div);

    }
}

let carroController = new CarroController();