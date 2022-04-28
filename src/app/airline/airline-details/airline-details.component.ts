import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Airline } from 'src/app/types/airline';

@Component({
  selector: 'app-airline-details',
  templateUrl: './airline-details.component.html',
  styleUrls: ['./airline-details.component.css']
})
export class AirlineDetailsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
   airline: Airline;


  ngOnInit(): void {
  }

}
