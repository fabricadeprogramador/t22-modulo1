class Conta{
    constructor(){
        this.nome;
        this.saldo;
    }

    sacar(valor){
        if( valor > this.saldo){
            return false;
        }else{
            this.saldo -= valor;
        }
        return true;
    }

    depositar(valor){
        this.saldo += valor;
    }
}