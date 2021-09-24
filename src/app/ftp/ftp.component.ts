import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceFtp } from '../services/ftp-service.service';
@Component({
  selector: 'app-ftp',
  templateUrl: './ftp.component.html',
  styleUrls: ['./ftp.component.scss'],
})
export class FtpComponent implements OnInit {
  title: string = '';
  genre: string = '';
  platform: string = '';
  developer: string = '';
  thumbnail: string = '';
  short_description: string = '';
  game_url: string = '';
  dataView: any = '';
  selectedOption: any;
  showInfo: boolean = true;
  constructor(private serviceFtp: ServiceFtp) {}
  ngOnInit(): void {
    this.serviceFtp.getFtp().subscribe((data) => {
      this.dataView = data;
    });
    this.serviceFtp.test();
  }
  selectValue(event: any) {
    return (this.selectedOption = event.target.value);
  }
  afficherInfo(): void {
    this.serviceFtp.getFtp(this.selectedOption).subscribe((data) => {
      this.dataView = data;
      console.log(this.dataView);
    });
    /*  this.title = this.dataView[this.selectedOption].title;
        this.genre = this.dataView[this.selectedOption].genre;
        this.platform = this.dataView[this.selectedOption].platform;
        this.developer = this.dataView[this.selectedOption].developer;
        this.thumbnail = this.dataView[this.selectedOption].thumbnail;
        this.short_description = this.dataView[this.selectedOption].short_description;
        this.game_url = this.dataView[this.selectedOption].game_url;
        this.showInfo = true; */
  }
}
