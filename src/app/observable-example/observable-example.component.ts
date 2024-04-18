import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css'
})
export class ObservableExampleComponent implements OnInit {

  ngOnInit(): void {
    
    const obtest$ = new Observable(observer =>{
      observer.next('printed from observable');
      observer.next('printed from observable 2');
    }).subscribe( value =>{
      console.log(value);
    });
    // just like we call the function to access the function we use subcribe to access the observable 
    // unline function we can return as many values as possible in observable
    // keeping subcribe open all the time is not a good idea so we need to close the subcribe
    obtest$.unsubscribe();
    
    const obtest = function(){
      return 'printed from function'
    }
    const fundata = obtest();
    console.log(fundata);

  }
}
