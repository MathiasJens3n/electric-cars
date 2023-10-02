import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  constructor(private http: HttpClient) { }

  fetchCars() : Observable<any>{
    return this.http.get('https://localhost:5000/api/car')
  }

  addCar(car: Car){
    const body = {car};
    this.http.post('https://localhost:5000/api/car', car) 
  }

}
