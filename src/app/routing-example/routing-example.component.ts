import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-example',
  templateUrl: './routing-example.component.html',
  styleUrl: './routing-example.component.css'
})
export class RoutingExampleComponent implements OnInit {

  posts = [ 
    {
      id : 1,
      title : "Title 1",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis repellendus hic rem aperiam consectetur tenetur cupiditate quisquam, unde error."
    },
    {
      id : 2,
      title : "Title 2",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis repellendus hic rem aperiam consectetur tenetur cupiditate quisquam, unde error."
    },
    {
      id : 3,
      title : "Title 3",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis repellendus hic rem aperiam consectetur tenetur cupiditate quisquam, unde error."
    }
   ];

   constructor(private route :ActivatedRoute) {}

   ngOnInit(): void {
    
    this.route.paramMap.subscribe(value=> {

      const page = value.get('page');
      const orderBy = value.get('orderBy');
      console.log(page);
      console.log(orderBy);
    });

   }

}