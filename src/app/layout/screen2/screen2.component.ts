import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'      
    })
  };

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {    
  }

  cars: any[any] = [];

  getCars(){
    this.http.get("http://localhost:63472/cars/", httpOptions).subscribe(
            data => {
                console.log(data);
                this.cars = data;                              
            }
        );
  }

  carsEmpty() {
    if(this.cars.length == 0) return false;
    return true;
  }

  emptyCars(){
    this.cars = []
  }

}
