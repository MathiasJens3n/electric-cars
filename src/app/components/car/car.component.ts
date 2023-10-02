import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from 'src/app/interfaces/car';
import { CarApiService } from 'src/app/services/car-api.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  dataSource : any;
  displayedColumns: string[] = ['id', 'model', 'year', 'range','batterycapacity','topspeed','weight','actions'];
  carForm!: FormGroup;
  cars: Car[] = [];
  constructor(private carApiService: CarApiService){
    this.carApiService.fetchCars().subscribe({
      next: (response) => {
        console.log('ok',response)
        this.dataSource = new MatTableDataSource(response);
      },
      error: (error) => {
        console.error('error',error);
      },
    });
  }

  createCar(){

  }

  removeCar(){
    
  }

  editCar(){
    
  }
}
