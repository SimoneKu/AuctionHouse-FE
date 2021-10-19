import { Injectable } from '@angular/core';
import { Carta } from '../model/carta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CartaService {

  private cartaUrl: string;

  constructor(private http: HttpClient) {
    this.cartaUrl = 'http://localhost:8082/carta';
  }

  public findAll(): Observable<Carta[]> {
    return this.http.get<Carta[]>(this.cartaUrl);
  }

  public save(carta: Carta) {
    return this.http.post<Carta>(this.cartaUrl, carta);
  }

}
