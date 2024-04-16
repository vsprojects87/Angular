import { Component } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


  form :any;

  // constructor(fb: FormBuilder) {
  // using form builder
  //   this.form = fb.group({
  //     fullname :['',[
  //       Validators.required,
  //       Validators.minLength(5)
  //     ]],
  //     email : new FormControl(),
  //     address : new FormControl(),
  //     skills : fb.array([]) 
  //   });
  // }


  constructor() {
    
    this.form = new FormGroup({
      fullname :new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email : new FormControl(),
      address : new FormControl(),
      skills : new FormArray([]) 
    });
  }

  // we are returning the list of skills as an array
  get Skills(){
    return this.form.get('skills') as FormArray;
  }

  // adding skills item into skills
    addSkills(skill: HTMLInputElement) {
      this.Skills.push(
        new FormControl(skill.value)
      );
    }
    
    removeSkills(index :number) {
      this.Skills.removeAt(index);
      }

}

