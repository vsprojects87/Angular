import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name : 'append'})

export class AppendPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return "Hello " + value;
    }
}

// we will have to add AppendPipe class to module section of the app.component to register pipe