import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
interface User {
  name: string;
  email: string;
  
}
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  condition:boolean=false;
  userAciv=[ {nom:'john',
  prenom:'Cena',
  email: 'john.doe@example.com'}]
  constructor(){
    
  }
 onSubmit(form:NgForm){
  if (form.valid){
    if (form.value.password!=form.value.confpassword && form.value.confpassword!=''){
      this.condition=true;
    }else{
      this.userAciv.push(form.value)
    }
  }else{
    console.log('le form est invalid')
  }
  
 }
 onDeleteUser(i:any) {
  // Supprimer l'utilisateur
this.userAciv.splice(i,1)
}
}
