import { AfterViewChecked, Component, OnInit, TrackByFunction } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { Passenger } from '../types/passenger';
import { PassengerResponse } from '../types/passengerResponse';
import { Student } from '../types/student';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { EditPassengerComponent } from './edit-passenger/edit-passenger.component';
import { PassengerDetail } from './passenger-details/passenger-details.component';
import * as FileSaver from 'file-saver';
// import 'bootstrap';
// import * as $ from 'jquery';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  passengers: Passenger[];
  filteredPassengers;
  confirmClicked;
  id;
  name;
  trips;
  airline;
  constructor(
    private dataService: DataService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
     this.loadPassengerData();


      setTimeout(() => {
        if(!this.passengers){
          this.passengers=[
            {_id:1,name:"dummy data",trips:20,airline:[{id:10}]},
            {_id:2,name:"asd",trips:20,airline:[{id:10}]},
            {_id:3,name:"asd",trips:20,airline:[{id:10}]},
            {_id:4,name:"asd",trips:20,airline:[{id:10}]},
            {_id:5,name:"asd",trips:20,airline:[{id:10}]},
            {_id:6,name:"asd",trips:20,airline:[{id:10}]},
            {_id:7,name:"asd",trips:20,airline:[{id:10}]},
            {_id:8,name:"asd",trips:20,airline:[{id:10}]},
            {_id:9,name:"asd",trips:20,airline:[{id:10}]},
            {_id:10,name:"asd",trips:20,airline:[{id:10}]},
            {_id:11,name:"asd",trips:20,airline:[{id:10}]},
            {_id:12,name:"asd",trips:20,airline:[{id:10}]},
          ];
        }
      }, 1000);

        // this.tstr.error('','API Down using dummy data!');

     this.filteredPassengers=this.passengers;
    }

  // ngAfterViewChecked(){
  //   $(function () {
  //     $('[data-toggle="tooltip"]').tooltip()
  //       })
  // }

  loadPassengerData(){
    this.dataService.loadPassengerData().subscribe(
      (res:PassengerResponse) => {
         this.passengers = res.data;
         this.filteredPassengers=this.passengers;
      }
    );

  }



  showPassengerDetail(passenger:Passenger) {
    const modalRef = this.modalService.open(PassengerDetail);
    modalRef.componentInstance.passenger = passenger;

  }

  addPassenger(){
    const modalRef = this.modalService.open(AddPassengerComponent);
  }

  editPassengerDetail(passenger:Passenger){
    const modalRef = this.modalService.open(EditPassengerComponent);
    modalRef.componentInstance.passenger = passenger;

    this.dataService.subject.subscribe(data => {
      if (data === 'Passenger|update'){
        this.loadPassengerData();
      }
    });

  }
  deletePassenger(passenger: Passenger){
    this.dataService.deletePassenger(passenger._id);
    this.dataService.subject.subscribe(data => {
      if (data === 'Passenger|delete'){
        this.loadPassengerData();
      }
    });

  }

  searchId(){
    if(this.id===""){
      this.filteredPassengers=this.passengers;
    }
    else{
      this.filteredPassengers=this.passengers.filter(res=>{
        return res._id.toString().match(this.id.toLocaleLowerCase());
      })
    }
  }
  searchName(){
    if(this.name===""){
      this.filteredPassengers=this.passengers;
    }
    else{
      this.filteredPassengers=this.passengers.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

    searchTrips(){
      if(this.trips===""){
        this.filteredPassengers=this.passengers;
      }
      else{
        this.filteredPassengers=this.passengers.filter(res=>{
          return res.trips.toString().match(this.trips.toLocaleLowerCase());
        })
      }
    }
      searchAirline(){
        if(this.airline===""){
          this.filteredPassengers=this.passengers;
        }
        else{
          this.filteredPassengers=this.passengers.filter(res=>{
            return res.airline[0].id.toString().match(this.airline);
          })
        }
      }

      clearOthers(event){
        this.filteredPassengers=this.passengers;

        if(event.target.id==='passengerId'){
          this.name='';
          this.trips='';
          this.airline='';
        }

        if(event.target.id==='passengerName'){
          this.id='';
          this.trips='';
          this.airline='';
        }

        if(event.target.id==='passengerTrips'){
          this.id='';
          this.name='';
          this.airline='';
        }
        if(event.target.id==='passengerAirline'){
          this.id='';
          this.name='';
          this.trips='';
        }

      }

      downloadPassengerData(){
        const data=[];
        this.passengers.forEach(element => {
          data.push(element._id+',');
          data.push(element.airline[0].id+',');
          data.push(element.name+',');
          data.push(element.trips+'\r\n');
        });

         FileSaver.saveAs(new Blob(data, { type: 'text/plain;charset=utf-8' }), 'data.csv', { autoBom: false });

      }

}


