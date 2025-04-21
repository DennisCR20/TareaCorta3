import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root' // Servicio disponible globalmente
})
export class PersonaService {
  private apiUrl = 'http://localhost:3000/api/personas'; // URL del backend

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener personas:', error); // Log de error
        return of([]); // Retorna un array vacío como fallback
      })
    );
  }
}
