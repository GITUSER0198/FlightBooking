import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { of, Subject } from 'rxjs';

import { EditPassengerComponent } from './edit-passenger.component';

describe('EditPassengerComponent', () => {
  let component: EditPassengerComponent;
  let fixture: ComponentFixture<EditPassengerComponent>;
  let mockDataService;
  let subject;
  let fb;
  let ngbModal;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPassengerComponent ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [FormBuilder, NgbActiveModal]
    })
    .compileComponents();
    subject = new Subject();


    mockDataService = jasmine.createSpyObj(['updatePassengerData']);

    fixture = TestBed.createComponent(EditPassengerComponent);
    //component = fixture.componentInstance;
    fb=TestBed.inject(FormBuilder);
    ngbModal=TestBed.inject(NgbModal);
    component=new EditPassengerComponent(fb,mockDataService,ngbModal);

    component.passenger = {name: 'asd', _id: 1234, trips: 250, airline: 8};
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('createEditPassengerForm should not be falsy', () => {
    expect(component.createEditPassengerForm()).toBeTruthy();
  });






  it('onSubmit should call updatePassengerData',()=>{
    mockDataService.updatePassengerData.and.returnValue(of(true));
    mockDataService.subject=subject;
    component.editPassengerForm=component.createEditPassengerForm();
    component.onSubmit();
     expect(mockDataService.updatePassengerData).toHaveBeenCalled()
  })

});
