// import { Injectable,Injector } from "@angular/core";

// @Injectable({
    //     providedIn:'root',
    // })

    // using injectable we can provide service in root that means anywhere in the application


export class PostService {

    postList :Array<any> =[
        {id:1, post : "post1"},
        {id:2, post : "post2"},
        {id:3, post : "post3"},
        {id:4, post : "post4"},
        {id:5, post : "post5"},

    ];

    // method to push data to postList
    // we will get data from component since we are passing data from component to servie
    addPost(data:any){
        this.postList.push(data);
    }
}

// we can import the service in two ways, one by importing it in component or we can declare it in providers section of app.module file

// to generate service in CLI we use ng g s service-name