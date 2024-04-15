import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngIntro';

  data : string |undefined;
  
  // onkeyup($event : any){
  //   console.log($event)
  //   console.log($event.keyCode);
  //   if($event.keyCode == 13){
  //     console.log('Enter pressed');
  //   }
  // }

  // handleClick($event : any) {
  //   console.log('Button clicked!', $event);
  //   // You can access event details here, for example:
  //   console.log('Button clicked at:', $event.clientX, $event.clientY);
  // }
}
