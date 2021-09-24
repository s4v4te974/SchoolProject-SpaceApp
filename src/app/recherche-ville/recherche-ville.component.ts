import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { RechercheVilleService } from '../services/recherche-ville.service';

@Component({
  selector: 'app-recherche-ville',
  templateUrl: './recherche-ville.component.html',
  styleUrls: ['./recherche-ville.component.scss']
})


export class RechercheVilleComponent implements OnInit {

  @Input() aff: boolean = false;
  @Output() afficherChild: EventEmitter<any> = new EventEmitter();

  villeSaisie: string = '';

  constructor(private serviceRechercheVille: RechercheVilleService) { }

  ngOnInit(): void {
  }

  //méthode appelée au clic sur le bouton ok par l'utilisateur
  afficherCarteParent(value:string): void{

    // appel de @Output
    this.afficherChild.emit(value);

    // affectation de la value dans la propriété villeSaisie pour le passer au HTML
    this.villeSaisie = value;
  }

}
