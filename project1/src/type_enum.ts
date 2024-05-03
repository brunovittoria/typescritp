//Serve para enumerar tipos de dados

//Exemplo pratico de uso é quando definimos um valor de status = 0 (INATIVO) e 1 (ATIVO)

enum StatusPermission {
    ADMIN = 1,
    USER = 2,
    SUPPORT = 0
}

console.log(StatusPermission.ADMIN)
console.log(StatusPermission.USER)
console.log(StatusPermission.SUPPORT)