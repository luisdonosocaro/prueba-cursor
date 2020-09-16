import { IComuna } from './comuna';

export interface IRegion {
    id?: number;
    nombre: string;
    comunas: Array<IComuna>
}
