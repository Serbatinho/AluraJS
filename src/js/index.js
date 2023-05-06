import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

cliente2.nome = "Alice";
cliente2.cpf = 22233344409;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1973;
contaCorrenteRicardo.saldo = 1000;
contaCorrenteRicardo.sacar(50)
contaCorrenteRicardo.depositar(-5)
console.log(contaCorrenteRicardo.saldo)


const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1935;
contaCorrenteAlice.saldo = 0;
console.log(contaCorrenteAlice.saldo);
contaCorrenteAlice.saldo = 100;
console.log(contaCorrenteAlice.saldo)



console.log(cliente1)
console.log(cliente2)