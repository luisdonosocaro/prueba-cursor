import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { RegionService } from '../../services/region.service';
import { IPersona } from '../../interfaces/persona';
import { IRegion } from '../../interfaces/region';
import { DatosService } from '../../services/datos.service';
import { IComuna } from '../../interfaces/comuna';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public personas: Array<IPersona>;
  public persona: IPersona;
  public busqueda: Array<any>;
  public regiones: Array<IRegion>;
  public region: IRegion;
  public term: string;

  constructor(
    private personaService: PersonaService,
    private regionService: RegionService,
    private datosService: DatosService
  ) {

    this.persona = {
      nombre: '',
      apellido: '',
      telefono: 0,
      rut: '',
      direccion: {
        calle: '',
        numero: 0,
        comuna: {
          nombre: ''
        }
      },
      activo: 0
    };

    this.region = {
      nombre: '',
      comunas: null
    }

  }

  ngOnInit(): void {
    this.getPersonas();
    this.getRegiones();
  }

  async getPersonas() {

    await this.personaService.personas().toPromise()
      .then((resp: Array<IPersona>) => {

        this.personas = resp;

        //Corrección charset
        this.personas.forEach(element => {
          element.apellido = this.datosService.corregirDatos(element.apellido);
          element.direccion.calle = this.datosService.corregirDatos(element.direccion.calle);
          element.direccion.comuna.nombre = this.datosService.corregirDatos(element.direccion.comuna.nombre);
          if (this.datosService.validarRut(element.rut) == false) {
            element.rut = element.rut + '*';
          }
        });

        this.busqueda = this.personas;

      })
      .catch(error => {
        console.log(error);
      });

  }

  async getRegiones() {

    await this.regionService.regiones().toPromise()
      .then((resp: Array<IRegion>) => {
        this.regiones = resp;

        //Corrección charset
        this.regiones.forEach(element => {
          element.nombre = this.datosService.corregirDatos(element.nombre);

        });

        this.regionPersonas();

      })
      .catch(error => {
        console.log(error);
      });

  }

  //Actualiza datos del modal
  datosPersona(persona: IPersona) {
    return this.persona = persona;
  }

  async regionPersonas() {

    this.busqueda.forEach(persona => {

      this.regiones.forEach(region => {

        region.comunas.forEach(comuna => {

          if (comuna.id == persona.direccion.comuna.id) {

            persona.region = region.nombre;
            persona.region_id = region.id;

          }

        });

      });

    });

  }

  filtroRegion(region_id: any) {

    if (region_id == 0) {
      this.busqueda = this.personas;
    }
    else {

      let result = this.personas.filter(persona => persona.region_id == region_id);
      this.busqueda = result;

    }
  }

}
