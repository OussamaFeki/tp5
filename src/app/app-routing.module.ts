import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {path:'envoyer_candidature',component:InscriptionComponent},
  {path:'users',component:UserDetailsComponent},
  { path: 'offres_emploi', component: ContentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
