// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('bruno', 'gomes', 1.79, 78);
const p2 = criaPessoa('fernado', 'pontes', 1.74, 82);
const p3 = criaPessoa('douglas', 'fernades', 1.76, 65);

console.log(p1.nome, p1.imc );
console.log(p2.nome, p2.imc);
console.log(p3.nome, p3.imc);

