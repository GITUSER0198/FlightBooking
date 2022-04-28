import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {

  addPassengerForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
  this.addPassengerForm = this.createAddPassengerForm();
  this.addPassengerForm.patchValue({
    name:sessionStorage.getItem('username')
  })
  }
  createAddPassengerForm(){
    return this.fb.group({
      name: ['', [Validators.required]],
      trips: ['', [Validators.required]],
      airline: ['', [Validators.required]]

    });
  }
  get addPassengerFormControl() {
    return this.addPassengerForm.controls;
  }
  onSubmit(){
    this.dataService.postPassengerData(this.addPassengerForm.value);
  }


}
