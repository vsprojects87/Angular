import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngIntro';

  data : string |undefined;
  onkeyup(){
    console.log(this.data);
    // console.log($event)
    // console.log($event.keyCode);
    // if($event.keyCode == 13){
    //   console.log('Enter pressed');
    // }
  }
}
