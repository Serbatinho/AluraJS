console.log("Trabalho com listas")

const listaDestinos = new Array (
    "São Paulo",
    "Salvador",
    "Rio de Janeiro",
)

listaDestinos.push("curitiba")

console.log("Destinos Possiveis: ")
console.log(listaDestinos)

listaDestinos.splice(1,1)
console.log(listaDestinos)
console.log(listaDestinos[0])