import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of, Subject } from 'rxjs';

import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let PASSENGERS;
  let mockDataService;
  let mockModalService;
  let NgbModal;
  let subject;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()]
    }).compileComponents();
    PASSENGERS = [ {
      _id: '9A495C6C-A507-B2B8-7BAD-3DB926E0296B',
      name: 'Ahmad',
      trips: '500',
      airline: '8'
    },
    {
      guid: '0CE5CA17-E554-62F3-B8BC-E2DC3963DCE8',
      name: 'Paras3044',
      trips: '250',
      airline: '5'
    }];
    mockDataService = jasmine.createSpyObj(['loadPassengerData', 'deletePassenger']);
    mockModalService=jasmine.createSpyObj(['open']);
    subject = new Subject();
    fixture = TestBed.createComponent(DashboardComponent);
    component = new DashboardComponent(mockDataService, NgbModal);
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call deletePassenger of service', () => {
    mockDataService.deletePassenger.and.returnValue(of(true));
    mockDataService.subject = subject;
    component.passengers = PASSENGERS;
    component.deletePassenger(PASSENGERS[1]);
    expect(mockDataService.deletePassenger).toHaveBeenCalled();
  });
  it('should call loadPassengerData on service Oninit',()=>{
    mockDataService.loadPassengerData.and.returnValue(of(true));
    mockDataService.subject = subject;
    component.ngOnInit();
    expect(mockDataService.loadPassengerData).toHaveBeenCalled();
  })

  it('id,name,trips,airline should be undefined on Init',()=>{
    expect(component.id).toBeUndefined();
    expect(component.name).toBeUndefined();
    expect(component.trips).toBeUndefined();
    expect(component.airline).toBeUndefined();
  })

  it('searchId: filteredPassengers should be equal to passengers when id is empty ',()=>{
    component.passengers=PASSENGERS;
    component.id='';
    component.searchId();
    expect(component.filteredPassengers).toEqual(PASSENGERS)
  })
  it('searchName: filteredPassengers should be equal to passengers when name is empty ',()=>{
    component.passengers=PASSENGERS;
    component.name='';
    component.searchName();
    expect(component.filteredPassengers).toEqual(PASSENGERS)
  })



  it('',()=>{
    component.filteredPassengers=PASSENGERS;

    console.log('_________________________________________');
    console.log(fixture.nativeElement);
    console.log(fixture.debugElement.query(By.css('input')));


  })

  // it('should clear other component properties when name is set',()=>{
  //   component.filteredPassengers=[{_id:1,name:"asd",trips:20,airline:[{id:10}]},
  //   {_id:2,name:"asd",trips:20,airline:[{id:10}]},
  //   {_id:3,name:"asd",trips:20,airline:[{id:10}]}];


  //   console.log(fixture.nativeElement);
  // })



});
