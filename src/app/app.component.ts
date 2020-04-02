import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
   public pid:number;
  public prodName:string;
  public prodCost:number;
  public prodOnline:string;
  public prodCategory:string;

  
 category:string[]=['Grocery','Mobile','Electronics','Cloths'];
 

 saveForm(prodForm){
   console.log("Product Form Data="+prodForm.value);
 }


}


