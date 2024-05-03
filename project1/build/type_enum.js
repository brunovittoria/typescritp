"use strict";
//Serve para enumerar tipos de dados
//Exemplo pratico de uso é quando definimos um valor de status = 0 (INATIVO) e 1 (ATIVO)
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 1] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 2] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 0] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
console.log(StatusPermission.SUPPORT);
