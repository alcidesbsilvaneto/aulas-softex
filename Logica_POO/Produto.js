class Produto {
  constructor(nome, preco, desconto, vencimento, descricao, entrada) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
    this.vencimento = vencimento;
    this.descricao = descricao;
    this.entrada = entrada;
  }

  getNome() {
    return this.nome;
  }

  setNome(novoNome) {
    this.nome = novoNome;
  }

  getPrecoComDesconto() {
    return this.preco * (1 - this.desconto);
  }
}

class Alimento extends Produto {
  constructor(nome, preco, desconto, vencimento, descricao, entrada, calorias) {
    super(nome, preco, desconto, vencimento, descricao, entrada);
    this.calorias = calorias;
  }
}

const produtinho = new Alimento(
  "Pao",
  1.99,
  0,
  "01/01/2020",
  "Pao feito por um belo e higiênico padeiro",
  100
);

console.log(produtinho.getNome());
produtinho.setNome("Lasanha");
console.log(`O nome do produto agora é ${produtinho.getNome()}`);
