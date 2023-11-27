
//objts materiasi

class Celular {
  constructor(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.ligado = false;
    this.bateria = 100;
  }

  ligar() {
    this.ligado = true;
    console.log('O celular está ligado.');
  }

  desligar() {
    this.ligado = false;
    console.log('O celular está desligado.');
  }

  verificarBateria() {
    console.log('Nível de bateria: ' + this.bateria + '%');
  }
}


const meuCelular = new Celular('Samsung', 'Galaxy S21', 'Preto');
meuCelular.ligar();
meuCelular.verificarBateria();
meuCelular.desligar();

//


class VideoGame {
  constructor(nome, fabricante, cor) {
    this.nome = nome;
    this.fabricante = fabricante;
    this.cor = cor;
    this.ligado = false;
  }

  ligar() {
    this.ligado = true;
    console.log(this.nome + ' está ligado.');
  }

  desligar() {
    this.ligado = false;
    console.log(this.nome + ' está desligado.');
  }

  jogar() {
    if (this.ligado) {
      console.log('Jogando ' + this.nome + '.');
    } else {
      console.log('Ligue o ' + this.nome + ' para jogar.');
    }
  }
}


const meuVideoGame = new VideoGame('PlayStation 5', 'Sony', 'Preto');
meuVideoGame.ligar();
meuVideoGame.jogar();
meuVideoGame.desligar();


//objts abstratos



class pet {
  constructor(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
    this.brincando = false;
  }

  brincar() {
    if (!this.brincando) {
      console.log(`${this.nome} está brincando.`);
      this.brincando = true;
    } else {
      console.log(`${this.nome} já está brincando.`);
    }
  }

  pararDeBrincar() {
    if (this.brincando) {
      console.log(`${this.nome} parou de brincar.`);
      this.brincando = false;
    } else {
      console.log(`${this.nome} não estava brincando.`);
    }
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}, Espécie: ${this.especie}, Idade: ${this.idade} anos`);
  }
}

const meuPet = new pet('Fido', 'Cachorro', 3);
meuPet.exibirInfo();
meuPet.brincar();
meuPet.pararDeBrincar();

//


class ContaBancaria {
  constructor(titular, saldoInicial, numeroConta) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.numeroConta = numeroConta;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
    } else {
      console.log('Saldo insuficiente para realizar o saque.');
    }
  }

  consultarSaldo() {
    console.log(`Saldo atual: ${this.saldo}`);
  }
}

const minhaConta = new ContaBancaria('João Silva', 1000, '12345');
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.consultarSaldo();