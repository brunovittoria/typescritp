type Uuid = number | string | null

function acessar1 (uuid: Uuid) {
    console.log("Acessou com o UUID: ", uuid)
}

function acessar2 (uuid: Uuid) {
    console.log("Acessou com o UUID: ", uuid)
}

type Moedas = "BRL" | "EUR" | "USD"

function comprarItems(moeda: Moedas){
    console.log("Comprando com a moeda ", moeda)
}

comprarItems("BRL")