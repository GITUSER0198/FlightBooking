import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css']
})
export class ContactUsPageComponent implements OnInit {

  ContactusForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private tstr:ToastrService
  ) { }

  ngOnInit(): void {
    this.ContactusForm=this.createContactUsForm();
  }
  createContactUsForm(){
    return this.fb.group({
      email:['',[Validators.required,Validators.email]],
      name:['',[Validators.required]],
      message:['',[Validators.required]]
    })
  }
  get ContactusFormControl() {
    return this.ContactusForm.controls;
  }


  onSubmit(){
    this.tstr.success('','Message sent successfully',{timeOut:1000})
    this.ContactusForm.reset();

  }


}
