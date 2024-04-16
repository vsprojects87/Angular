import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-custom-validation',
  templateUrl: './reactive-form-custom-validation.component.html',
  styleUrl: './reactive-form-custom-validation.component.css'
})
export class ReactiveFormCustomValidationComponent{

  form :any;
  
  
  constructor(fb : FormBuilder) {
    
    this.form = fb.group({
      username : ['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      password : ['', Validators.required]
    })
  }

}
