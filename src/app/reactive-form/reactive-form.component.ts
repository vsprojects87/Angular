import { Component } from '@angular/core';
import { FormArray, NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


  form :any;

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

  get Skills(){
    return this.form.get('skills') as FormArray;
  }
    addSkills(skills: HTMLInputElement) {
      this.Skills.push(
        new FormControl(skills.value)
      );
    }
    
    removeSkills(index :number) {
      this.Skills.removeAt(index);
      }

}

