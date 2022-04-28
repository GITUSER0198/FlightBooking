import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { DisplayDataComponent } from './display-data.component';

describe('DisplayDataComponent', () => {
  let component: DisplayDataComponent;
  let fixture: ComponentFixture<DisplayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDataComponent],
      imports: [HttpClientModule, ToastrModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check if form data is loaded', () => {
    expect(component.getFormDataFromService()).toBeTruthy();
  });

  it('check if form data is displayed in html', () => {
    component.registerFormData = {name: 'dummyname', email: 'dummyemail', mobile: 'dummymobile', profession: '', username: '',password:''};
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card-body').textContent).toContain('dummyname');
    expect(fixture.nativeElement.querySelector('.card-body').textContent).toContain('dummyemail');
    expect(fixture.nativeElement.querySelector('.card-body').textContent).toContain('dummymobile');

  });

});
