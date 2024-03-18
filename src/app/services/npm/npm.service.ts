import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { NpmGetPackageRequest, NpmSearchRequest } from './models/npm-api';

@Injectable({
  providedIn: 'root'
})
export class NpmService {

  private NPMJS_BASE_URL = 'https://registry.npmjs.org/';
  private ABBREVIATED_ACCEPT_HEADER = 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*';

  constructor(private http: HttpClient) { }

  public searchPackages = (request: NpmSearchRequest, abbreviated?: boolean): Observable<unknown> => {
    const headers = new HttpHeaders();
    let params = new HttpParams();
    let property: keyof typeof request;

    if (abbreviated) {
      headers.append('Accept', this.ABBREVIATED_ACCEPT_HEADER);
    }

    for (property in request) {
      if (request[property]) {
        params = params.set(property as string, request[property] ?? ''); // extance check above
      }
    }

    return this.http.get<unknown>(`${this.NPMJS_BASE_URL}-/v1/search`,
      { headers: headers, params: params })
      .pipe(
        catchError(this.handleError<unknown>('searchPackages', {}))
      );
  };

  public getPackage = (request: NpmGetPackageRequest, abbreviated?: boolean): Observable<unknown> => {
    const headers = new HttpHeaders();

    if (abbreviated) {
      headers.append('Accept', this.ABBREVIATED_ACCEPT_HEADER);
    }

    return this.http.get<unknown>(`${this.NPMJS_BASE_URL}/${request.package}/${request.version ?? ''}`, { headers: headers })
    .pipe(
      catchError(this.handleError<unknown>('getPackage', {}))
    );
  }

  private handleError = <T>(operation = 'operation', result?: T): (error: HttpErrorResponse) => Observable<T> => {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
