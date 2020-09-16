import { IComuna } from './comuna';
export interface IDireccion {
    calle: string;
    numero: number;
    comuna: IComuna;
}
