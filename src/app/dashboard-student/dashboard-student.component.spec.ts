import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { FlightSchedule } from '../types/FlightSchedule';

import { DashboardStudentComponent } from './dashboard-student.component';

describe('DashboardStudentComponent', () => {
  let component: DashboardStudentComponent;
  let fixture: ComponentFixture<DashboardStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStudentComponent ],
      imports:[ToastrModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if file is valid CSV file',()=>{
    let file:File=new File([],'test.csv');
    expect(component.isValidCSVFile(file)).toBeTrue();
  })

  it('should return true if file is valid Excel file',()=>{
    let file:File=new File([],'test.xlsx');
    expect(component.isValidExcelFile(file)).toBeTrue();
  })

  it('file should be undefined on startup',()=>{
    expect(component.file).toBeUndefined();
  })



  it('file change event should arrive in handler', () => {
    let input  = fixture.debugElement.query(By.css('input[type=file]')).nativeElement;
     // check that the event handler has been called
     spyOn(component, 'uploadListener');
     input.dispatchEvent(new Event('change'));
     expect(component.uploadListener).toHaveBeenCalled();
  });


  it('getHeadersArray should return correct result',()=>{
    let dummyCSVRecordsArray=["1355,Quatar Airways,SIN,LHR,Japan,Y,100",
                              "1356,Singapore Airlines,ANA,ARG,Argentina,Y,220"];
    let expectedResultCount=["1355","Quatar Airways","SIN","LHR","Japan", "Y","100"];

    let returnedResult=component.getHeaderArray(dummyCSVRecordsArray);
    expect(returnedResult).toEqual(expectedResultCount);
  })

  it('getDataRecordsArrayFromCSVFile should return correct result',()=>{
    let dummyCSVRecordsArray=["1355,Quatar Airways,SIN,LHR,Japan,Y,100",
    "1356,Singapore Airlines,ANA,ARG,Argentina,Y,220"];
    let headerLength=7;
    let FlightSchedule1=new FlightSchedule();
      FlightSchedule1.active='Y';
      FlightSchedule1.airlineName='Quatar Airways';
      FlightSchedule1.country='Japan';
      FlightSchedule1.iata='SIN';
      FlightSchedule1.icao='LHR';
      FlightSchedule1.id='1355';
      FlightSchedule1.totalPassengers='100';

    let FlightSchedule2=new FlightSchedule();
      FlightSchedule2.active='Y';
      FlightSchedule2.airlineName='Singapore Airlines';
      FlightSchedule2.country='Argentina';
      FlightSchedule2.iata='ANA';
      FlightSchedule2.icao='ARG';
      FlightSchedule2.id='1356';
      FlightSchedule2.totalPassengers='220';

    let expectedResult=[
      FlightSchedule1,FlightSchedule2
    ];
    let returnedResult=component.getDataRecordsArrayFromCSVFile(dummyCSVRecordsArray,headerLength);
    expect(returnedResult).toEqual(expectedResult);
  })

  it('fileReset should reset reader and records array',()=>{
    let input  = fixture.debugElement.query(By.css('input[type=file]')).nativeElement;
    component.records=[{v1:'v1'},{v1:'v2'}];
    component.fileReset();
    expect(component.reader.nativeElement.value).toEqual('');
    expect(component.records).toEqual([]);

  })



  // it('should test load of file reader',()=>{
  //   let eventListener = jasmine.createSpy();
  //   let readFileSpy = jasmine.createSpy();
  //   var dummyFileReader = { addEventListener: eventListener, readAsDataURL: readFileSpy};
  //   spyOn(window as any, 'FileReader').and.returnValue(dummyFileReader);
  //   var reader = new FileReader();
  //   reader.addEventListener('load', function(e) {

  //     expect(e.target.result).toEqual('');

  //   });
  //   expect(eventListener.calls.mostRecent().args[0]).toEqual('load');
  // })




});
