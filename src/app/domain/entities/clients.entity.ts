import { Chatarra, Subasta } from "./subasta.entity"

export class Vendedor{
    idVendedor?:number
    user?:string
    password?:string
    phone?:string
    name?:string
    departamento?:string
    provincia?:string
    distrito?:string
    direccion?:string
    chatarra?:Chatarra[]
    subasta?:Subasta[]
}
export class Comprador{
    idShopper?:number
    user?:string
    password?:string
    phone?:string
    name?:string
    departamento?:string
    distrito?:string
    provincia?:string
    status?:string
}