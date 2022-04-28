import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PassengerDetail } from './passenger-details.component';

describe('PassengerDetail', () => {
  let component: PassengerDetail;
  let fixture: ComponentFixture<PassengerDetail>;
  let NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerDetail ],
      imports: [],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetail);
    component = fixture.componentInstance;
    component.passenger = {_id: 111, name: 'asd', trips: 250, airline: 8};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
