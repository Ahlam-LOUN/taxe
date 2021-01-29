import { Local } from './local';
import { Redevable } from './redevable';
export class Taxe{
     id:number;
     redevable:Redevable;
	 local:Local;
	 trim:number;
	 nombreNuite:number;
	 annee:number;
	 montantBase:number;
	 montantRetard:number;
	 montantTotal:number;
	 nombreMoisRetard:number;
	 taux:number;

}