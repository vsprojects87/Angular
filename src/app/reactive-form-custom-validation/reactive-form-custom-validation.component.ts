import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'app-reactive-form-custom-validation',
  templateUrl: './reactive-form-custom-validation.component.html',
  styleUrl: './reactive-form-custom-validation.component.css'
})
export class ReactiveFormCustomValidationComponent{

  form :any;
  
  
  constructor(private fb : FormBuilder) {
    
    this.form = fb.group({
      username : ['',[
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceValidations
      ]],
      password : ['', Validators.required]
    });
  }

  get fc(){
    return this.form.controls;
  }

}
