import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-example-2',
  templateUrl: './routing-example-2.component.html',
  styleUrl: './routing-example-2.component.css'
})
export class RoutingExample2Component implements OnInit{

  constructor(private route : ActivatedRoute) {}
  
  ngOnInit(): void {
  this.route.paramMap.subscribe(value =>{
    console.log(value);
    let id = value.get('id');
    let title = value.get('title');

    console.log(id);
    console.log(title);
  })
  }

}
