import { Component, OnInit } from '@angular/core';
import {TrombiService} from '../services/trombi.service';
/* import sampleData from '../../assets/TrombiJson.json'; */
@Component({
  selector: 'app-trombi',
  templateUrl: './trombi.component.html',
  styleUrls: ['./trombi.component.scss']
})
export class TrombiComponent implements OnInit{
  dataView: any = '';

  constructor(private trombiserv: TrombiService) {}

  ngOnInit(): void {
    this.trombiserv.getTrombi().subscribe(
      data => {
      this.dataView = data;
    });
  }
  /* Users: any = sampleData; */
}