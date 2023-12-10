import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
interface User {
  name: string;
  email: string;
  age: number;
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
 @Input() users:any;
 @Output() onDelete = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    // Initialiser la propriété user
    
  }
  
  supprimer(i:any){
    this.users.splice(i,1)


  }
}
