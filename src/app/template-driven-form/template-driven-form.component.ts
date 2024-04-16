import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// must import this

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
onsubmit(f: NgForm) {
  console.log(f);
}


}
