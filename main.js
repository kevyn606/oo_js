class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
      }
}






class Estudante extends Pessoa {
    constructor(nome, idade, curso) {

      super(nome, idade);
      this.curso = curso;
    }
    mostrarCurso() {
        console.log(`Estou cursando ${this.curso}.`);
      }
}

class Trabalhador extends Pessoa {
    constructor(nome, idade, profisao) {
        
      super(nome, idade);
      this.profisao =profisao;
    }
    mostrarprosisao() {
        console.log(`Trabalho com ${this.profisao}.`);
      }
}






    const estudante1 = new Estudante("Ana", 20, "geografia");
    estudante1.saudacao();
    estudante1.mostrarCurso();

    const estudante2 = new Estudante("Gabi", 18, "Matematica");
    estudante2.saudacao();
    estudante2.mostrarCurso();

    const trabalhador1 = new Trabalhador("Gui", 45, "Programação");
    trabalhador1.saudacao();
    trabalhador1.mostrarprosisao();


