
export interface DigimonDetalleModel {
    id:    number;
    name:  string;
    xAntibody:  boolean;
    images: ImageDigimon[];
    levels: Level[];
    types: Type[]; 
    attributes: Attribute[];
    releaseDate: string;
    fields: Field[];
}


export interface ImageDigimon {
    id:    number;
    attribute:  string;
}

export interface Level {
    id:    number;
    level:  string;
}

export interface Type {
    id:    number;
    type:  string;
}

export interface Attribute {
    id:    number;
    attribute:  string;
}

export interface Field {
    id:    number;
    field:  string;
    image:  string;
}
