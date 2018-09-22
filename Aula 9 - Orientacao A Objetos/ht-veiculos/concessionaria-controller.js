class ConcessionariaController{
    constructor(){
        this.carro1 = new Carro();
        this.carro2 = new Carro();
        this.carro3 = new Carro();
    }


    salvar(){
        
        if(this.carro1.nome == undefined){

            this.carro1.nome = document.getElementById("nome").value;
            this.carro1.cor = document.getElementById("cor").value;
            this.carro1.quantidadePortas = document.getElementById("quantidadePortas").value;
            this.carro1.km = document.getElementById("km").value;
            this.carro1.fabricante = document.getElementById("fabricante").value;
            this.carro1.anoFabricacao = document.getElementById("anoFabricacao").value;
            this.carro1.preco = document.getElementById("preco").value;
            this.carro1.foto = document.getElementById("foto").value;

            window.localStorage.setItem('carro', this.carro);
            this.anunciarCarro(this.carro1);
            this.limparCampos();

        }else if(this.carro2.nome == undefined){

            this.carro2.nome = document.getElementById("nome").value;
            this.carro2.cor = document.getElementById("cor").value;
            this.carro2.quantidadePortas = document.getElementById("quantidadePortas").value;
            this.carro2.km = document.getElementById("km").value;
            this.carro2.fabricante = document.getElementById("fabricante").value;
            this.carro2.anoFabricacao = document.getElementById("anoFabricacao").value;
            this.carro2.preco = document.getElementById("preco").value;
            this.carro2.foto = document.getElementById("foto").value;
            
            this.anunciarCarro(this.carro2);
            this.limparCampos();

        }else if(this.carro3.nome == undefined){

            this.carro3.nome = document.getElementById("nome").value;
            this.carro3.cor = document.getElementById("cor").value;
            this.carro3.quantidadePortas = document.getElementById("quantidadePortas").value;
            this.carro3.km = document.getElementById("km").value;
            this.carro3.fabricante = document.getElementById("fabricante").value;
            this.carro3.anoFabricacao = document.getElementById("anoFabricacao").value;
            this.carro3.preco = document.getElementById("preco").value;
            this.carro3.foto = document.getElementById("foto").value;
            
            this.anunciarCarro(this.carro3);
            this.limparCampos();

        }else{
            alert("Limite de carros cadastrados atingido.");
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
}

let concessionariaController = new ConcessionariaController();