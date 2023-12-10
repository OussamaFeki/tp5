import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email = 'info@example.com';
  telephone = '123-456-7890';
  adresse = '123 Street, City';
}
