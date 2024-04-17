import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpace{

   static noSpaceValidations(control : AbstractControl) : ValidationErrors | null{
        let controlvalue = control.value as string;

        if(controlvalue.indexOf(" ")>=0){
            return { noSpaceValidator: true};
         }
         else{
            return null;
         }
    }
}


