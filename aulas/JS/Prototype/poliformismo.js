// Superclass
function Conta (agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function( valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficinete: R$${this.saldo}`)
        return
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed()}`)
}
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.constructor = ContaCorrente
ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
        console.log(`Saldo insuficinete: R$${this.saldo}`)
        return
    }
    this.saldo -= valor;
    this.verSaldo();
};
function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.constructor = ContaPoupança
const elias = new ContaCorrente(2424, 24242424, 0, 100)
elias.depositar(30)
elias.sacar(80)

console.log()

const elias2 = new ContaPoupança(12, 15, 0)
elias2.depositar(30)
elias2.sacar(80)