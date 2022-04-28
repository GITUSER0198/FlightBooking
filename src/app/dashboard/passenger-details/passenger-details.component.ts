import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Passenger } from 'src/app/types/passenger';
import { Student } from 'src/app/types/student';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetail implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  passenger: Passenger;

  ngOnInit(): void {
  }

}
