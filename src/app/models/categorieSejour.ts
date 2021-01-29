import { TauxTaxeSejour } from './tauxTaxeSejour';
import { Local } from './local';
export class CategorieSejour{
    id:number;
    libelle:string;
    locals:Local[];
    tauxTaxeSejour:TauxTaxeSejour;
}