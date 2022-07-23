import { Comprador } from "./clients.entity"

export class Subasta{
    idSubasta:number
    fecha:Date
    seleccionado:PropuestaExt
    fechaRecojo:Date
    propuestas:Propuesta[]
    status:string
    vendedor:number
    chatarra:Chatarra
}

export class Chatarra{
    idChatarra:number
    titulo:string
    description:string
    precioBase:number
    vendedor:number
}

export class Propuesta {
    idPropuesta:number;
    price:string;
    time:Date;
    subasta:number;
    comprador:number;
}

export class PropuestaExt{
    idPropuesta:number;
    price:number;
    time:Date;
    subasta:number;
    comprador:Comprador;
}