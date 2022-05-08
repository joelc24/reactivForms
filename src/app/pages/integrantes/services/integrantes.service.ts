import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Integrante } from '../../../models/integrantes.interface';

@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {

  private url = environment.apiUrl;

  constructor(private http : HttpClient) { }

  public getIntegrantes(): Observable<any> {
    return this.http.get(this.url);
  }

  public getIntegrante(id: number): Observable<any> {
    return this.http.get(this.url + id);
  }

  public saveIntegrante(integrante: Integrante): Observable<Integrante> {
    return this.http.post<Integrante>(this.url, integrante);
  }

  public updateIntegrante(integrante: any): Observable<any> {
    return this.http.patch(this.url, integrante);
  }

  public deleteIntegrante(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
