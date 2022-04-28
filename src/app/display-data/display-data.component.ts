import { Component, OnInit } from '@angular/core';
import { RegisterFormData } from '../types/RegisterFormData';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  registerFormData: RegisterFormData;

  ngOnInit(): void {
    this.registerFormData = this.getFormDataFromService();
  }

  getFormDataFromService(): any {
    return this.dataService.registerFormData;
  }


}
