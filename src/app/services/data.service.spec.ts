import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DataService } from './data.service';
describe('DataService', () => {
  let dataService: DataService;
  let httpTestingController: HttpTestingController;
  // let tstr:ToastrService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), BrowserAnimationsModule,HttpClientModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    dataService = TestBed.inject(DataService);
  });


  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  describe('Passenger', () => {

    it('should call post with the correct URL for postPassengerData and make POST request', () => {
      const passengerData = {_id: 1, name: 'asd', trips: 20, airline: [{id: 10}]};
      dataService.postPassengerData(passengerData);
      const req = httpTestingController.expectOne('https://api.instantwebtools.net/v1/passenger');
      req.flush(passengerData);
      expect(req.request.method).toBe('POST');
    });

    it('should call delete with the correct URL for deletePassenger and make DELETE request', () => {
      const passengerId = 1;
      dataService.deletePassenger(passengerId);
      const req = httpTestingController.expectOne(`https://api.instantwebtools.net/v1/passenger/${passengerId}`);
      req.flush(1);
      expect(req.request.method).toBe('DELETE');
    });


  });

  // describe('Airline',()=>{

  //   it('should call post with the correct URL for postAirlineData and make POST request',()=>{
  //     let airlineData={id:1,name:"a1",country:"Thailand",slogan:"Smooth as Silk / I Fly THAI",website:"www.thaiairways.com"}
  //     dataService.postAirlineData(airlineData)
  //     const req=httpTestingController.expectOne('https://api.instantwebtools.net/v1/airline')
  //     req.flush(airlineData)
  //     // expect(req.request.method).toBe('POST');
  //   })

  // })
  // it('should return correct data on get Passenger', () => {
  //   const passengers = [{_id: 1, name: 'asd', trips: 20, airline: [{id: 10}]}];
  //   dataService.loadPassengerData().subscribe(data =>
  //     expect(passengers).toEqual(passengers));
  //   const req = httpTestingController.expectOne('https://api.instantwebtools.net/v1/passenger?page=0&size=100');
  //   req.flush(passengers);
  //  });

});
