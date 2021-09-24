import { Component, OnInit } from '@angular/core';
import { ServiceNasaService } from '../services/nasa-service.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.scss']
})
export class NasaComponent implements OnInit {

  //déclaration des variables
  id: number = 0;
  missionName: string ="";
  dateLancement: string="";
  rocketName: string ="";
  launchSite: string ="";
  launchSuccess: boolean = true;
  missionPatch: string="";
  detailsMission: string="";
  link: string="";
  video: string="";
  dataView: any ="";
  selectedOption: any;
  safeURL: any;
  showInfo: boolean =false;
  missionpatchOK:boolean = true; 
  wrongURL: string = "https://w";

  constructor(private ServiceNasa: ServiceNasaService) { }

  ngOnInit(): void {

    //La méthode subscribe permet de souscrire à un observable
    //et a etre notifié des nouvelles valeurs erreur ou fin du stream
    this.ServiceNasa.getNasaData().subscribe(
      data => {
        this.dataView = data;
      }
    )
   
  }
  // evenenament de type any qui recupère l'evenement 
  selectValue(event:any){
    return this.selectedOption = event.target.value;
  }

  afficherInfo(): void{
        console.log(this.missionpatchOK);
        this.missionpatchOK = true;
        this.missionName = this.dataView[this.selectedOption].mission_name;
        this.rocketName = this.dataView[this.selectedOption].rocket.name;
        this.dateLancement = this.dataView[this.selectedOption].launch_date_utc;
        this.launchSite = this.dataView[this.selectedOption].launch_site.name_long;
        this.launchSuccess = this.dataView[this.selectedOption].launch_success;
        this.missionPatch = this.dataView[this.selectedOption].links.mission_patch.small;
        this.detailsMission = this.dataView[this.selectedOption].details;
        this.link = this.dataView[this.selectedOption].links.articles[0];
        this.video = this.dataView[this.selectedOption].links.videos[0];
        this.showInfo = true;

        console.log(this.missionpatchOK);
        if(this.missionPatch == null || this.missionPatch.startsWith(this.wrongURL)){
          this.missionpatchOK = false;
        }
        console.log(this.missionpatchOK);
  }
}