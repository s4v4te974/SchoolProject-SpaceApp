import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheVilleService {

  polluantsVille = {
    'value_pm25': '',
    'category_pm25': '',
    'description_pm25': '',

    'value_CO': '',
    'category_CO': '',
    'description_CO': '',

    'value_O3': '',
    'category_O3': '',
    'description_O3': '',

    'value_NO2': '',
    'category_NO2': '',
    'description_NO2': '',

    'latitude': '',
    'longitude': ''
  }

  afficherCarte: any = false;

  url: string = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldwide-pollution&q=&facet=country&facet=filename&refine.country=France';

  constructor(private http: HttpClient) { }

  private getNomVille(ville: string = 'Balma'): Observable<any> {
    return this.http.get(`${this.url}&refine.filename=${ville}`);
  }

  public getDataVilleSaisie(villeRecuperee: string): Observable<any> {
    // souscription à l'observable pour récupérer les données
    return this.getNomVille(villeRecuperee);
  }

  //méthode pour mettre en forme la saisie utilisateur pour qu'elle corresponde au fichier json
  public changePatternVilleSaisie(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  //getter pour récupérer l'objet polluantsVille déclaré plus haut
  public getPolluantsVille() {
    return this.polluantsVille;
  }

  //setter pour positionner l'objet polluantsVille déclaré plus haut
  public setPolluantsVille(o: any) {
    this.polluantsVille = o;
  }

  // getter pour récupérer l'objet afficherCarte qui est un boolean 
  public getAfficherCarte():Observable<boolean> {
    return of (this.afficherCarte);
  }

  // setter pour positionner l'objet afficherCarte qui est un boolean
  public setAfficherCarte(v: any) {
    this.afficherCarte = v;
  }
}
