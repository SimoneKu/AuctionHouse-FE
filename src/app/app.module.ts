import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';



import { CartaFormComponent } from './carta-form/carta-form.component';
import { CartaService } from './service/carta.service';
import { CartaListComponent } from './carta-list/carta-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { RicercaCartaService } from './service/ricerca-carta.service';


@NgModule({
  declarations: [
    AppComponent,
    CartaFormComponent,
    CartaListComponent,
    HomePageComponent,
    RicercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CartaService , RicercaCartaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
