class ContaBancaria {
  static numeroDeContas = 0;

  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
    ContaBancaria.numeroDeContas++;
  }

  getTitular() {
    return this.titular;
  }

  obterSaldo() {
    return this.saldo;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }

  // método para sacar dinheiro
  sacar(valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente";
    } else {
      this.saldo -= valor;
      return "Saque efetuado com sucesso";
    }
  }
}

console.log(`Número de contas: ${ContaBancaria.numeroDeContas}`);
const conta1 = new ContaBancaria("João", 1000);
const conta2 = new ContaBancaria("Maria", 2000);
const conta3 = new ContaBancaria("Pedro", 2000);
console.log(`Número de contas: ${ContaBancaria.numeroDeContas}`);
