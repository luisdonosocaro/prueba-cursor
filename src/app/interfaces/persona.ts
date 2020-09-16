import { IDireccion } from './direccion';
export interface IPersona {
    id?: number;
    nombre: string;
    apellido: string;
    telefono: number;
    rut: string;
    direccion: IDireccion;
    activo: number;
    region?: string;
    region_id?: number;
}
