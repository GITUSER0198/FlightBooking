import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ContactUsPageComponent } from './contact-us-page.component';

describe('ContactUsPageComponent', () => {
  let component: ContactUsPageComponent;
  let fixture: ComponentFixture<ContactUsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsPageComponent ],
      imports:[ReactiveFormsModule,ToastrModule.forRoot(),BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ContactusFormControl should return controls of form',()=>{
      expect(component.ContactusFormControl).toBeTruthy();
  })

  it('createContactUsForm should be instance of FormGroup',()=>{
    expect(component.createContactUsForm()).toBeInstanceOf(FormGroup)
  })


it('onSubmit should reset form',()=>{
  component.ContactusForm.markAsDirty();
  component.onSubmit();
  expect(component.ContactusForm.dirty).toBe(false);
})



});
