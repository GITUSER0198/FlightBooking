import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { Passenger } from 'src/app/types/passenger';

@Component({
  selector: 'app-edit-passenger',
  templateUrl: './edit-passenger.component.html',
  styleUrls: ['./edit-passenger.component.css']
})
export class EditPassengerComponent implements OnInit {

  passenger: Passenger;

  editPassengerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    public activeModal: NgbActiveModal

  ) { }

  ngOnInit(): void {
    this.editPassengerForm = this.createEditPassengerForm();
    this.editPassengerForm.patchValue({
      id: this.passenger._id,
      name: this.passenger.name,
      trips: this.passenger.trips,
      airline: this.passenger.airline[0].id
    });

  }


  get editPassengerFormControl(){
    return this.editPassengerForm.controls;
  }

  createEditPassengerForm(){
    return this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      trips: ['', [Validators.required]],
      airline: ['', [Validators.required]]
    });
  }

  onSubmit(){
    const passengerData:Passenger = {
      name: this.editPassengerForm.value.name,
      airline: this.editPassengerForm.value.airline,
      trips: this.editPassengerForm.value.trips
    };
    this.dataService.updatePassengerData(passengerData, this.editPassengerForm.value.id);

  }

}
