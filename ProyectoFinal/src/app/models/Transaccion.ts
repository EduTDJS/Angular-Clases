import { Type } from "./Type";


export interface Transaccion {
    amount: number;
    date: Date;
    type: Type;
    id: string
    
}