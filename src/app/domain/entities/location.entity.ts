export class Departamento{
    id:string
    name:string
    provincias:Provincia[]
}

export class Provincia{
    id:string
    name:string
    distritos:Distrito[]
}

export class Distrito{
    id:string
    name:string
}



