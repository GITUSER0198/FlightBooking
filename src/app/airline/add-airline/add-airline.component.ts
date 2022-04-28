import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  addAirlineForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.addAirlineForm = this.createAddAirlineForm();
    this.addAirlineForm.patchValue({
      name:sessionStorage.getItem('username')
    })
  }
  createAddAirlineForm(){
    return this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      country: [''],
      slogan: [''],
      headQuaters: [''],
      website: [''],
      established: ['']
    });
  }
  get addAirlineFormControl(){
    return this.addAirlineForm.controls;
  }
  onSubmit(){
    this.dataService.postAirlineData(this.addAirlineForm.value);
  }
}
