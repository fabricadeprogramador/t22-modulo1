class ConcessionariaController{
    constructor(){
        this.carro = new Carro();
        this.carros = new Array();
    }


    salvar(){
        
            this.carro.nome = document.getElementById("nome").value;
            this.carro.cor = document.getElementById("cor").value;
            this.carro.quantidadePortas = document.getElementById("quantidadePortas").value;
            this.carro.km = document.getElementById("km").value;
            this.carro.fabricante = document.getElementById("fabricante").value;
            this.carro.anoFabricacao = document.getElementById("anoFabricacao").value;
            this.carro.preco = document.getElementById("preco").value;
            this.carro.foto = document.getElementById("foto").value;

            this.carros.push(this.carro);
            this.carro = new Carro();
            this.anunciarCarros();
            this.limparCampos();


    }

    anunciarCarros(){
        this.removerAnuncios();
        
        for (let i = 0; i < this.carros.length; i++) {
            var div = document.createElement("div");
            div.className="carro";

            var img = document.createElement("img");
            img.src = this.carros[i].foto;

            div.appendChild(img);

            var fabricante = document.createElement("span");
            fabricante.className = "fabricante";
            fabricante.innerText = this.carros[i].fabricante;
            div.appendChild(fabricante);

            var nome = document.createElement("span");
            nome.className = "nome";
            nome.innerText = this.carros[i].nome;
            div.appendChild(nome);

            var divAnoKm = document.createElement("div");
            divAnoKm.className = "anoKm";
            var anoFabricacao = document.createElement("span");
            anoFabricacao.className="ano";
            anoFabricacao.innerText = "Ano " + this.carros[i].anoFabricacao;
            divAnoKm.appendChild(anoFabricacao);

            
            var km = document.createElement("span");
            km.innerText = this.carros[i].km + " KM";
            km.className="km";
            divAnoKm.appendChild(km);
            div.appendChild(divAnoKm);

            var divCorPorta = document.createElement("div");
            divCorPorta.className = "CorPorta";

            var cor = document.createElement("span");
            cor.className="cor";
            cor.innerText = "Cor: " + this.carros[i].cor;
            divCorPorta.appendChild(cor);

            var quantidadePortas = document.createElement("span");
            quantidadePortas.innerText = this.carros[i].quantidadePortas + " Portas";
            quantidadePortas.className="porta";

            divCorPorta.appendChild(quantidadePortas);
            div.appendChild(divCorPorta);


            var divPreco = document.createElement("div");
            divPreco.className="preco";


            var preco = document.createElement("span");
            preco.innerText = "R$: " + this.carros[i].preco;
            preco.className="preco";
            divPreco.appendChild(preco);
            div.appendChild(divPreco);
            

            document.getElementById("anuncio").appendChild(div);
        }


    }

    limparCampos(){
        document.getElementById("nome").value = "";
        document.getElementById("cor").value = "";
        document.getElementById("quantidadePortas").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fabricante").selectedIndex  = 0;
        document.getElementById("anoFabricacao").value = "";
        document.getElementById("preco").value = "";
        document.getElementById("foto").value = "";
    }

    removerAnuncios(){
        document.getElementById("anuncio").innerHTML = "";
    }
}

let concessionariaController = new ConcessionariaController();