import { CategorieSejour } from "./categorieSejour";
import { Redevable } from "./redevable";
import { Rue } from "./rue";

export class Local {
    id:number;
    complementAdresse:string;
    libelle:string;
    categorieSejour:CategorieSejour;
    rue:Rue;
    redevable:Redevable;

}