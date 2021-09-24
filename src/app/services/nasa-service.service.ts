import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ServiceNasaService {

  //recuperation des données via l'url
  url: string = 'https://rocketlabapi.herokuapp.com/v1/launches/';

  //injection de dépendance
  constructor(private http: HttpClient) { }

  
  //permet de recuperer l'url
  // type Observable : permet de récupérer des données dans le tmpes, 
  // c'est à dire soit à l'instanciation soit à chaque fois que l'on
  // appelle la classe 
  public getNasaData() : Observable<any> {
    
    // get retourne le fichier json courant ( appelable depuis d'autre classe)
    return this.http.get(this.url);
  }
}
