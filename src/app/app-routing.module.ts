import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';
import { NasaComponent } from './nasa/nasa.component';
import { FtpComponent } from './ftp/ftp.component';
import { TrombiComponent } from './trombi/trombi.component';
import { MapLeafletComponent } from './map-leaflet/map-leaflet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nasa', component: NasaComponent},
  {path: 'ftp', component: FtpComponent},
  {path: 'pollution', component: MapLeafletComponent},
  {path: 'trombi', component: TrombiComponent},

]

@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
