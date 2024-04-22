import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpmService {

  private BASE_URL = 'https://registry.npmjs.com/'
  private http = inject(HttpClient);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPackage = (npmPackage: string, version = ''): Observable<any> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.get<any>(`${this.BASE_URL}${npmPackage}/${version}`);
  }

}
