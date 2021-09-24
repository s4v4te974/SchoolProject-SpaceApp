import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrombiService {
  url: string = '../assets/TrombiJson.json';
  constructor(private http: HttpClient) { }

  public getTrombi(): Observable<any> {
    return this.http.get(this.url);
  }
}
