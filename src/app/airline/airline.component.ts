import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from 'primeng/table';
import { AirlineLoaderService } from '../services/airline-loader.service';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AirlineDetailsComponent } from './airline-details/airline-details.component';
import {Airline} from '../types/airline'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {

  airlines:Airline[];
  filteredAirlines;
  id;
  name;
  country;
  slogan;
  website;

  @ViewChild('table') table: Table;

  constructor(
    private airlineLoader: AirlineLoaderService,
    private modalService: NgbModal) {

     }

  ngOnInit(): void {


    this.airlines = this.airlineLoader.airlines;
    this.filteredAirlines=this.airlines;

    setTimeout(() => {

      if(!this.airlines){
        this.airlines = [
          {id: 1, name: 'Dummy data', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 2, name: 'a2', country: 'Quatar', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 1, name: 'a1', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 2, name: 'a2', country: 'Quatar', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 1, name: 'a1', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 2, name: 'a2', country: 'Quatar', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 1, name: 'a1', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 2, name: 'a2', country: 'Quatar', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 1, name: 'a1', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 2, name: 'a2', country: 'Quatar', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 1, name: 'a1', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 2, name: 'a2', country: 'Quatar', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 1, name: 'a1', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 2, name: 'a2', country: 'Quatar', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 1, name: 'a1', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 2, name: 'a2',
           country: 'Quatar', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'},
          {id: 1, name: 'a1', country: 'Thailand', slogan: 'Smooth as Silk / I Fly THAI', website: 'www.thaiairways.com'}];
          this.filteredAirlines=this.airlines;
          // this.tstr.error('','API Down using dummy data!');
      }

    }, 1000);






  }

  openNewForm(airline){
    const modalRef = this.modalService.open(AirlineDetailsComponent);
    modalRef.componentInstance.airline = airline;
  }

  addAirline(){
    const modalRef = this.modalService.open(AddAirlineComponent);

  }

    searchId(){
      console.log(this.airlines[0]);
      if(this.id===""){
        this.filteredAirlines=this.airlines;
      }
      else{
        this.filteredAirlines=this.airlines.filter(res=>{
        //   console.log(res.id.toString());
        //   console.log(this.id);

          return res.id?.toString().match(this.id.toLocaleLowerCase());
        })
      }
    }
    searchName(){
      if(this.name===""){
        this.filteredAirlines=this.airlines;
      }
      else{
        this.filteredAirlines=this.airlines.filter(res=>{
          return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
        })
      }
    }
    searchCountry(){
      if(this.country===""){
        this.filteredAirlines=this.airlines;
      }
      else{
        this.filteredAirlines=this.airlines.filter(res=>{
          return res.country?.toLocaleLowerCase().match(this.country.toLocaleLowerCase());
        })
      }
    }
    searchSlogan(){
      if(this.slogan===""){
        this.filteredAirlines=this.airlines;
      }
      else{
        this.filteredAirlines=this.airlines.filter(res=>{
          return res.slogan?.toLocaleLowerCase().match(this.slogan.toLocaleLowerCase());
        })
      }
    }
    searchWebsite(){
      if(this.website===""){
        this.filteredAirlines=this.airlines;
      }
      else{
        this.filteredAirlines=this.airlines.filter(res=>{
          return res.website?.toLocaleLowerCase().match(this.website.toLocaleLowerCase());
        })
      }
    }


    clearOthers(event){
      this.filteredAirlines=this.airlines;
      if(event.target.id==='airlineId'){
        this.name='';
        this.slogan='';
        this.country='';
        this.website='';
      }
      if(event.target.id==='airlineName'){
        this.id='';
        this.slogan='';
        this.country='';
        this.website='';
      }
      if(event.target.id==='airlineSlogan'){
        this.id='';
        this.name='';
        this.country='';
        this.website='';
      }

      if(event.target.id==='airlineCountry'){
        this.id='';
        this.name='';
        this.slogan='';
        this.website='';
      }
      if(event.target.id==='airlineWebsite'){
        this.id='';
        this.name='';
        this.slogan='';
        this.country='';
      }

    }

}
