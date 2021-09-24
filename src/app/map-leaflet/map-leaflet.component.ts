//infos démarche import carte et API: https://www.frugalprototype.com/leaflet-angular/

import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

import { RechercheVilleService } from '../services/recherche-ville.service';

@Component({
  selector: 'app-map-leaflet',
  templateUrl: './map-leaflet.component.html',
  styleUrls: ['./map-leaflet.component.scss'],

})

export class MapLeafletComponent implements OnInit {

  // création d'un objet json avec les clés seulement
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

    'abscisse': '',
    'ordonnee': ''
  }

  villeSaisie: string = '';
  aff: boolean = false;
  myMap: any
  error: string = "";

  //création d'un constructeur pour injecter le service
  constructor(private serviceRechercheVille: RechercheVilleService) {

    this.serviceRechercheVille.getAfficherCarte().subscribe(
      (data: boolean) => {
        console.log("afficher: ", data);
        this.aff = data;
      }
    );
  }

  ngOnInit(): void {
    // initilisation de la carte avec les coordonnées du centre et le niveau de zoom.
    this.myMap = L.map('frugalmap', {
      scrollWheelZoom: false
  }).setView([43.610145, 1.503705], 10);

    // Ajout de l'image de la carte
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(this.myMap);

  }

  // méthode appelée en premier dans ce fichier pour récupérer la valeur donnée par l'enfant et la diffuser
  afficherParent(childValue: string): void {

    this.villeSaisie = childValue;

    // passe la propriété aff à true
    this.aff = true;

    // appel la méthode de la classe getDataVilleSaisie pour récupérer les data
    this.getDataVilleSaisie(childValue);

  }


  // Méthode qui crée la carte et affiche un icon et encart avec data
  getMapData(childValue: string) {

    //déclaration d'un modèle de marqueurs pour le/les positionner sur la carte
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
      iconSize: [25, 41], // taille de l’icône
      iconAnchor: [12.5, 41] // point d’ancrage, on divise la première valeur par 2 sinon problème d'affichae
    });

    const latitudeString: string = this.serviceRechercheVille.getPolluantsVille().latitude;
    const latitudeNumber: number = +latitudeString;

    const longitudeString: string = this.serviceRechercheVille.getPolluantsVille().longitude;
    const longitudeNumber: number = +longitudeString;

    this.myMap.setView([latitudeNumber, longitudeNumber], 12);

    L.marker([latitudeNumber, longitudeNumber], { icon: myIcon }).bindPopup(
      '<b>Pm_25 : </b>' + this.serviceRechercheVille.getPolluantsVille().description_pm25 +
      '<br>Valeur : ' + this.serviceRechercheVille.getPolluantsVille().value_pm25 +
      '<br>Indice = ' + this.serviceRechercheVille.getPolluantsVille().category_pm25 +

      '<br><br><b>CO : </b>' + this.serviceRechercheVille.getPolluantsVille().description_CO +
      '<br>Valeur = ' + this.serviceRechercheVille.getPolluantsVille().value_CO +
      '<br>Indice = ' + this.serviceRechercheVille.getPolluantsVille().category_CO +

      '<br><br><b>O3 :  </b>' + this.serviceRechercheVille.getPolluantsVille().description_O3 +
      '<br>Valeur = ' + this.serviceRechercheVille.getPolluantsVille().value_O3 +
      '<br>Indice = ' + this.serviceRechercheVille.getPolluantsVille().category_O3 +

      '<br><br><b>NO2 :  </b>' + this.serviceRechercheVille.getPolluantsVille().description_NO2 +
      '<br>Valeur = ' + this.serviceRechercheVille.getPolluantsVille().value_NO2 +
      '<br>Indice = ' + this.serviceRechercheVille.getPolluantsVille().category_NO2
    ).addTo(this.myMap).openPopup();
  }


  // Méthode qui récupère la ville saisie et qui récupère les datas de cette ville
  getDataVilleSaisie(value: string) {
    let villeOK: string = '';

    // appel de la méthode qui modifie le pattern de la saisie
    villeOK = this.serviceRechercheVille.changePatternVilleSaisie(value);

    // appel de la méthode pour récupérer les data du fichier Json
    this.serviceRechercheVille.getDataVilleSaisie(villeOK).subscribe(

      data => {

        if (data.records.length === 0) {
          this.error = 'Ville incorrecte';

        } else {
          // Set de l'objet Json avec les données récupérées
          this.serviceRechercheVille.setPolluantsVille(
            {
              'value_pm25': data.records[0].fields.value_pm5,
              'category_pm25': data.records[0].fields.category_pm25,
              'description_pm25': data.records[0].fields.data_pollutants_pm25_description,

              'value_CO': data.records[0].fields.value_co,
              'category_CO': data.records[0].fields.category_co,
              'description_CO': data.records[0].fields.data_pollutants_co_description,

              'value_O3': data.records[0].fields.value_o3,
              'category_O3': data.records[0].fields.category_o3,
              'description_O3': data.records[0].fields.data_pollutants_o3_description,

              'value_NO2': data.records[0].fields.value_no2,
              'category_NO2': data.records[0].fields.category_no2,
              'description_NO2': data.records[0].fields.data_pollutants_no2_description,

              'latitude': data.records[0].geometry.coordinates[1],
              'longitude': data.records[0].geometry.coordinates[0]
            } // fin de l'objet Json polluantsVille
          ); // fin du setPolluantsVille

          //On set le boolean à true vu que les données d'une ville sont enregistrées dans le JSON
          this.aff = true;

          this.polluantsVille.value_pm25 = this.serviceRechercheVille.getPolluantsVille().value_pm25,
          this.polluantsVille.category_pm25 = this.serviceRechercheVille.getPolluantsVille().category_pm25;
          this.polluantsVille.description_pm25 = this.serviceRechercheVille.getPolluantsVille().description_pm25;

          this.polluantsVille.value_CO = this.serviceRechercheVille.getPolluantsVille().value_CO;
          this.polluantsVille.category_CO = this.serviceRechercheVille.getPolluantsVille().category_CO;
          this.polluantsVille.description_CO = this.serviceRechercheVille.getPolluantsVille().description_CO;

          this.polluantsVille.value_O3 = this.serviceRechercheVille.getPolluantsVille().value_O3;
          this.polluantsVille.category_O3 = this.serviceRechercheVille.getPolluantsVille().category_O3;
          this.polluantsVille.description_O3 = this.serviceRechercheVille.getPolluantsVille().description_O3;

          this.polluantsVille.value_NO2 = this.serviceRechercheVille.getPolluantsVille().value_NO2;
          this.polluantsVille.category_NO2 = this.serviceRechercheVille.getPolluantsVille().category_NO2;
          this.polluantsVille.description_NO2 = this.serviceRechercheVille.getPolluantsVille().description_NO2;

          this.getMapData(villeOK);
          this.error="";

        } // fin if else
      }, // fin data

      error =>{
        this.error = "Autre erreur";
      }

    ); // fin du subscribe

    //On remet le boolean à false après utilisation pour la prochaine recherche d'une ville
    this.aff = false;
  }
}





