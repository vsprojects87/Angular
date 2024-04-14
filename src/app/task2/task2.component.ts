import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})
export class Task2Component {

  name: string = '';
  address : string ='';

  arr:Array<any>=[];


  onclick(){
    this.arr.push({
      "name":this.name,
      "address":this.address
    });
    this.name="";
    this.address="";
  }

  onclickDelete(idx:any){
    this.arr.splice(idx,1);
    this.name="";
    this.address="";
  }

}
