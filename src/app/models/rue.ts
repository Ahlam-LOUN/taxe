import { Quartier } from './quartier';
import { Local } from './local';
export class Rue {
    id:number;
    reference:string;
    libelle:string;
    quartier:Quartier;
    locals:Local[];
}