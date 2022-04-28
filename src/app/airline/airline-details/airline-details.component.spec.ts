import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AirlineDetailsComponent } from './airline-details.component';

describe('AirlineDetailsComponent', () => {
  let component: AirlineDetailsComponent;
  let fixture: ComponentFixture<AirlineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineDetailsComponent ],
      imports: [NgbModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.airline = {id: 123, name: 'air1', logo: 'logo', country: 'country'
    , slogan: 'slogan', website: 'website.com'};
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
