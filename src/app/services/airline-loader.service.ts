import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Airline } from '../types/airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineLoaderService {

  private AIRLINE_BASE_URL = 'https://api.instantwebtools.net/v1/airlines';
  private isLoad = true;
  public airlines;

  public getAirlines(){
    return this.airlines;
  }

  constructor(private http: HttpClient) {

  }

  loadAirlineData(){
    console.log('Loading airlines data');

    if (this.isLoad)
    {
      this.isLoad = false;

      const $airlineData = this.http.get(this.AIRLINE_BASE_URL).pipe(retry(3)).subscribe(
        (data) => {
          console.log('airlines loaded ');
          this.airlines = data;
        }
      );

      return $airlineData;
    }

  }

}
