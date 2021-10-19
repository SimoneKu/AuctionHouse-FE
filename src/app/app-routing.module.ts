import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartaFormComponent } from './carta-form/carta-form.component';
import { CartaListComponent } from './carta-list/carta-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RicercaComponent } from './ricerca/ricerca.component';


const routes: Routes = [
  { path: 'addcarta', component: CartaFormComponent },
  { path: 'carta', component: CartaListComponent },
  { path: '', component: HomePageComponent },
  { path: 'cerca', component: RicercaComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
