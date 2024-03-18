import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndOfLifeDetails } from './models/end-of-life-api';

@Injectable({
  providedIn: 'root'
})
export class EndOfLifeService {

  private ENDOFLIFE_BASE_URL = 'https://endoflife.date/api/';
  public products: string[] = [];
  public onReady = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
    this.fetchAllProducts().subscribe({
      next: (response: string[]) => {
        this.products = response;
        this.onReady.emit(true);
        this.onReady.complete();
      },
      error: (error: HttpErrorResponse) => {
        this.onReady.emit(false);
        this.onReady.complete();
        console.error(error);
      },
      complete: () => {
        this.onReady.complete();
      }
    });
  }

  public getAllDetails(product: string): Observable<EndOfLifeDetails[]> {
    return this.http.get<EndOfLifeDetails[]>(`${this.ENDOFLIFE_BASE_URL}${product}.json`);
  }

  private fetchAllProducts = (): Observable<string[]> => {
    return this.http.get<string[]>(`${this.ENDOFLIFE_BASE_URL}/all.json`);
  }

}
