import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, pipe, Subject } from 'rxjs';
import { Airline } from '../types/airline';
import { PassengerResponse } from '../types/passengerResponse';
import { RegisterFormData } from '../types/RegisterFormData';
import { Student } from '../types/student';
import { map, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private STUDENT_BASE_URL = './assets/students.json';
  private PASSENGER_BASE_URL = 'https://api.instantwebtools.net/v1/passenger';
  private AIRLINE_BASE_URL = 'https://api.instantwebtools.net/v1/airlines';

  registerForm: FormGroup;
  registerFormData: RegisterFormData;
  selectedAirline = new Subject();
  passengers;
  subject = new Subject();
  constructor(
    private http: HttpClient,
    private tstr: ToastrService,
    private modalService: NgbModal) {
    this.registerFormData = {
      name: '',
      email: '',
      mobile: '',
      username: '',
      password: '',
      profession: ''
    };

  }

  setFormData(values: RegisterFormData) {
    this.registerFormData.name = values.name;
    this.registerFormData.email = values.email;
    this.registerFormData.username = values.username;
    this.registerFormData.mobile = values.mobile;
    this.registerFormData.profession = values.profession;

  }

  loadStudentData(): Observable<Student[]> {
    return this.http.get<Student[]>(this.STUDENT_BASE_URL).pipe(retry(3));
  }

  loadPassengerData(){
    console.log('Loading passenger data');
    return this.http.get<PassengerResponse>(`${this.PASSENGER_BASE_URL}?page=0&size=100`).pipe(retry(3));
  }

  postPassengerData(passsengerData){
    return this.http.post(`${this.PASSENGER_BASE_URL}`, passsengerData).subscribe(res => {
      console.log(res);
      this.tstr.success('', 'New passenger saved', {timeOut: 1000});
      this.modalService.dismissAll();
    }, err => {
      console.log(err);
      this.tstr.error('', 'Error, Please retry', {timeOut: 1000});
    });
  }

  postAirlineData(airlineData){
    return this.http.post(`${this.AIRLINE_BASE_URL}`, airlineData).subscribe(res => {
      console.log(res);
      this.tstr.success('', 'New airline saved', {timeOut: 1000});
      this.modalService.dismissAll();
    }, err => {
        console.log(err);
        if (err.error.message === `there is an airline registered under same id you've entered`){
          this.tstr.error('Please enter a different id', 'Airline already exists', {timeOut: 1000});
        }
        else{
          this.tstr.error('', 'Error, Please retry', {timeOut: 1000});
        }
    });
  }

  updatePassengerData(passengerData, id){
    console.log(`${this.PASSENGER_BASE_URL}/${id}`, passengerData);
    return this.http.put(`${this.PASSENGER_BASE_URL}/${id}`, passengerData).subscribe(
       res => {
         console.log(res);
         this.tstr.success('', 'Passenger details updated', {timeOut: 1000});
         this.modalService.dismissAll();
         this.subject.next('Passenger|update');
       },
       err => {
        console.log(err);
        this.tstr.error('', 'Error, Please retry', {timeOut: 1000});
       }
     );
  }

  deletePassenger(id){
    console.log(`${this.PASSENGER_BASE_URL}/${id}`, id);
    return this.http.delete(`${this.PASSENGER_BASE_URL}/${id}`)
    .subscribe(
      (res) => {
        console.log(res);
        this.tstr.success('', 'Passenger deleted', {timeOut: 1000});
        this.subject.next('Passenger|delete');

      },
       (err) => {
        console.log(err);
        this.tstr.error('', 'Error, Please retry', {timeOut: 1000});
       }
    );

  }



}



