import { Injectable } from '@angular/core';
import { Carta } from '../model/carta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RicercaCartaService {

  private ricercaCartaUrl: string;
  private codice : string;

  constructor(private http: HttpClient) {
    this.ricercaCartaUrl = 'http://localhost:8082/cerca';
  }

  public findAll(codice: String): Observable<Carta[]> {
    return this.http.get<Carta[]>(this.ricercaCartaUrl+'/'+codice);
  }

 

}
