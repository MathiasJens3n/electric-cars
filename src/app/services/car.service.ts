import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Car } from '../interfaces/car';
import { CarApiService } from './car-api.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private nextId: number = 0;
  private cars: Array<Car> = [];
  private carSubject$: Subject<Car[]> = new BehaviorSubject<Car[]>(this.cars);
  cars$: Observable<Car[]> = this.carSubject$.asObservable();

  constructor(carApiService: CarApiService) {
    this.cars = 
  }
}
