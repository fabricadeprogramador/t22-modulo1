class CadastroController{

    constructor(){
        this.pessoa = new Pessoa();
        
    }

    salvar(){
        
        this.pessoa.nome = document.getElementById("nome").value;
        this.pessoa.idade = document.getElementById("idade").value;
        this.pessoa.altura = document.getElementById("altura").value;
        this.pessoa.peso = document.getElementById("peso").value;
        this.pessoa.corDosOlhos = document.getElementById("corDosOlhos").value;
        
        if( this.validarDados() == true ){
            this.exibirBotoesDeAcao();
            this.exibirTabela();
        }
    }

    andar(){
       this.pessoa.andar(); 
    }

    correr(){
        this.pessoa.correr();
    }

    falar(){
        this.pessoa.falar();
    }

    validarDados(){

        if(this.pessoa.nome == ""){
            alert("Preencha o campo Nome");
            return false;
        }
        else if(this.pessoa.idade == ""){
            alert("Preencha o campo Idade");
            return false;
        }
        else if(this.pessoa.altura == ""){
            alert("Preencha o campo Altura");
            return false;
        }
        else if(this.pessoa.peso == ""){
            alert("Preencha o campo Peso");
            return false;
        }
        else if(this.pessoa.corDosOlhos == ""){
            alert("Preencha o campo Cor Dos Olhos");
            return false;
        }else{
            return true;
        }
    }

    exibirBotoesDeAcao(){
        document.getElementById("divAcao").style.display = "block";
        document.getElementById("divSalvar").style.display = "none";
    }

    exibirTabela(){
        var tabela = document.createElement("table");
        var cabecalho = document.createElement("tr");

        var cabecalhoNome = document.createElement("th");
        cabecalhoNome.innerText = "Nome";
        cabecalho.appendChild(cabecalhoNome);

        var cabecalhoIdade = document.createElement("th");
        cabecalhoIdade.innerText = "Idade";
        cabecalho.appendChild(cabecalhoIdade);

        var cabecalhoAltura = document.createElement("th");
        cabecalhoAltura.innerText = "Altura";
        cabecalho.appendChild(cabecalhoAltura);

        var cabecalhoPeso = document.createElement("th");
        cabecalhoPeso.innerText = "Peso";
        cabecalho.appendChild(cabecalhoPeso);

        var cabecalhoCorDosOlhos = document.createElement("th");
        cabecalhoCorDosOlhos.innerText = "Cor dos Olhos";
        cabecalho.appendChild(cabecalhoCorDosOlhos);

        tabela.appendChild(cabecalho);

        var linha = document.createElement("tr");
        
        var linhaNome = document.createElement("td");
        linhaNome.innerText= this.pessoa.nome;
        linha.appendChild(linhaNome);

        var linhaIdade = document.createElement("td");
        linhaIdade.innerText= this.pessoa.idade;
        linha.appendChild(linhaIdade);
        tabela.appendChild(linha);

        var linhaAltura = document.createElement("td");
        linhaAltura.innerText= this.pessoa.altura;
        linha.appendChild(linhaAltura);
        tabela.appendChild(linha);

        var linhaPeso = document.createElement("td");
        linhaPeso.innerText= this.pessoa.peso;
        linha.appendChild(linhaPeso);
        tabela.appendChild(linha);

        var linhaCorDosOlhos = document.createElement("td");
        linhaCorDosOlhos.innerText= this.pessoa.corDosOlhos;
        linha.appendChild(linhaCorDosOlhos);
        tabela.appendChild(linha);

        document.body.appendChild(tabela);

    }

}
let cadastroController = new CadastroController();