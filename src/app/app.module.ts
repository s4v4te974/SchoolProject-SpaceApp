import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NasaComponent } from './nasa/nasa.component';
import { FtpComponent } from './ftp/ftp.component';
import { TrombiComponent } from './trombi/trombi.component';
import { RechercheVilleComponent } from './recherche-ville/recherche-ville.component';
import { MapLeafletComponent } from './map-leaflet/map-leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NasaComponent,
    FtpComponent,
    TrombiComponent,
    MapLeafletComponent,
    RechercheVilleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

