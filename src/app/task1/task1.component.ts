import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {


title : string | undefined;
detail : string | undefined;
imgUrl : string | undefined;
link : string | undefined;
background : boolean|undefined;

}
