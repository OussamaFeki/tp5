import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compte_rendu';
  email = 'info@example.com';
  telephone = '123-456-7890';
  adresse = '123 Street, City';
  onSubmit(form:NgForm){
    if (form.valid){
      console.log('Données du formulaire : ',form.value);
    }else{
      console.log('LE formulaire n\'est pas valide ')
    }
  }
}
