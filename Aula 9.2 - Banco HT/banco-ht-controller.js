class BancoHtController{

    constructor(){
        this.conta = new Conta();
    }


    criarConta(){

        this.conta.pessoa.nome = document.getElementById("nome").value;
        this.conta.pessoa.rg = document.getElementById("rg").value;
        this.conta.pessoa.cpf = document.getElementById("cpf").value;
        this.conta.pessoa.endereco = document.getElementById("endereco").value;
        this.conta.saldo= 0.0;
        var todosOsCamposForamPreenchidos = this.validarCadastro();
        
        if( todosOsCamposForamPreenchidos ){
            this.esconderTelaDeCriarConta();
            this.exibirTelaDeTransacao();
        }
        
    }

    depositar(){
        var valor =  parseFloat( document.getElementById("valor").value );
        this.conta.depositar( valor );
        this.atualizarSaldo();
        
    }

    sacar(){
        var valor =  parseFloat( document.getElementById("valor").value );
        
        var saqueRealizadoComSucesso = this.conta.sacar( valor );

        if( saqueRealizadoComSucesso == false){

            alert("Saldo Insuficiente");

        }else{
            this.atualizarSaldo();
        }

        console.log("Saque: "+this.conta.saldo);
    }

    validarCadastro(){

        if(this.conta.pessoa.nome == ""){
            alert("Preencha o campo nome ");
            return false;
        }else if(this.conta.pessoa.rg == ""){
            alert("Preencha o campo RG ");
            return false;
        }else if(this.conta.pessoa.cpf == ""){
            alert("Preencha o campo CPF");
            return false;
        }else if(this.conta.pessoa.endereco == ""){
            alert("Preencha o campo Endereco ");
            return false;
        }else{
            return true;
        }

    }

    esconderTelaDeCriarConta(){
        document.getElementById("criarConta").style.display = "none";
    }

    exibirTelaDeTransacao(){
        document.getElementById("transacao").style.display = "block";
        this.atualizarSaldo();
    }

    atualizarSaldo(){
        document.getElementById("saldo").innerText = "Saldo Atual: R$:" + this.conta.saldo;
    }
}

let bancoHtController = new BancoHtController();