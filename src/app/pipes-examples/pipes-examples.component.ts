import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrl: './pipes-examples.component.css'
})
export class PipesExamplesComponent {

name :string ='sahil';

num : number = 23333;

price : number = 10000;

decimalvalue : number = 2.676654545;

today : Date = new Date();

objData : object = {
id:1,name:'hii'
};


arr : Array<string> = [
  'item1','item2','item3','item4','item5'
];

summary : string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente excepturi fugiat quibusdam dolorum non est odit quisquam laborum? In magnam aliquid dicta, eius sint tempora quam asperiores saepe ullam suscipit beatae, earum est iste veritatis harum sit ex blanditiis adipisci autem. Odit, ipsam sint magni facilis quasi quam. Doloremque, assumenda.";





}
