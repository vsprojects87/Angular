import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-examples',
  templateUrl: './directive-examples.component.html',
  styleUrl: './directive-examples.component.css'
})
export class DirectiveExamplesComponent {
[x: string]: any;

arr : Array<string> = ['one','two','three','four','five','six','seven','eight','nine','ten'];


// we generally declare Array of object like objArr : Array<object>
// but when we access value in html like i.name, here i coming from *ngFor="let i of objArr"
// so when we access like this this will show error that why we use Array<any>

objArr : Array<any> = [
{ id:1, name:'one'},
{ id:2, name:'two'},
{ id:3, name:'three'},
{ id:4, name:'four'},
{ id:5, name:'five'}
];


// we are getting item and then finding indexof that item and then using splice method to remove that item from that array
// splice takes two arguments first is index and second is number of elements to be delete(0 to delete none, 1 to delete 1 item and 2 or more mumner to delete item more than one)
onDelete(i:any) {
  let index = this.arr.indexOf(i);
  this.arr.splice(index,1);
  }
  
  // we are directly passing index instead of passing item 
  onDeleteIndex(index:any) {
    this.arr.splice(index,1);
  }


  num:string|undefined;
  onclick(i:string){
    this.num = i;
  }


isActive :boolean = true;



}
