import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private endpoint: string;

  constructor(private httpClient: HttpClient) {

    this.endpoint = environment.APIEndpoint;  //seteo endpoint

  }

  personas() {
    return this.httpClient.get(`${this.endpoint}/persona`);
  }

}
