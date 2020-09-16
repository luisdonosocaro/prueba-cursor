import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private endpoint: string;

  constructor(private httpClient: HttpClient) {

    this.endpoint = environment.APIEndpoint;  //seteo endpoint

  }

  regiones() {
    return this.httpClient.get(`${this.endpoint}/region`);
  }

}
