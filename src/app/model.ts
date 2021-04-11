export class Collaborateur {

    id : string = ""

    constructor(public nom : string,public prenom:string, public email : string ){}
    
}

export class Tag {

    constructor(public libelle : string ){}
    
}

export class TableauKanban {

    collaborateurs : Collaborateur[] = []

    constructor(public libelle : string ){}
    
}



export class Section {
    
}








  