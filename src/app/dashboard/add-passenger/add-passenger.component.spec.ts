import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';

import { AddPassengerComponent } from './add-passenger.component';

describe('AddPassengerComponent', () => {
  let component: AddPassengerComponent;
  let fixture: ComponentFixture<AddPassengerComponent>;
  let mockDataService;
  let activeModal;
  let fb;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPassengerComponent ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [FormBuilder, NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activeModal=TestBed.inject(NgbActiveModal);
    fb=TestBed.inject(FormBuilder);
    mockDataService = jasmine.createSpyObj(['postPassengerData']);

    fixture = TestBed.createComponent(AddPassengerComponent);
    component = new AddPassengerComponent(activeModal,fb,mockDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createAddPassengerForm should not be falsy', () => {
    expect(component.createAddPassengerForm()).toBeTruthy();
  });


  it('onSubmit should call postPassengerData',()=>{
    mockDataService.postPassengerData.and.returnValue(of(true));
    component.addPassengerForm=component.createAddPassengerForm();
    component.onSubmit();
    expect(mockDataService.postPassengerData).toHaveBeenCalled()
  })

});
