console.log("Trabalhando com condicionais");
const lista = new Array(
    "São Paulo",
    "Salvador",
    "Rio de Janeiro",
);
const idadeComprador = 15;
const acompanhado = true;

lista.push("Curitiba");
if (idadeComprador >= 18 || acompanhado == true){
    console.log("Comprador maior de idade");
    lista.splice(1,1);
}
else {
    console.log("Comprador menor de idade, venda negada");
};


console.log("Embarque: \n \n");

if (idadeComprador <18 && acompanhado == false) {
    console.log("Não pode embarcar");
}
else {
    console.log("Pode embarcar");
};


console.log(lista);
