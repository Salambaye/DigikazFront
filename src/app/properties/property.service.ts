import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

import { Property } from '../interfaces/property.interface';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiHost = 'http://127.0.0.1:8000/';
  private propertiesCache$?: Observable<Property[]>;

  constructor(private http: HttpClient) { }

  getProperties(): Observable<Property[]> {
    if (!this.propertiesCache$) {
      this.propertiesCache$ = this.http.get<Property[]>(`${this.apiHost}properties/`).pipe(
        map((response: any) => response.results),
        shareReplay(1)
      );
    }
    return this.propertiesCache$;
  }

  createProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(`${this.apiHost}properties/`, property);

    tap(() => {
      this.propertiesCache$ = of([]);
    })

  }

}
