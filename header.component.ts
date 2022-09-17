import { Component, AfterViewInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Animal} from "./animalModel";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }
  animals: string[] = [];



  ngAfterViewInit(): void {

  this.http.get<{animals: [Animal]}> (
    "http://localhost:3000/animals"
  )
  .subscribe(outputData => {

    console.log(outputData.animals.length);
    console.log(outputData.animals[0].name);

    for (let i=0; i<outputData.animals.length; i++){
      this.animals.push(outputData.animals[i].name);
      console.log(this.animals);
    }
  })
  }
}
