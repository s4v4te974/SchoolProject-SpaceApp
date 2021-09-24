import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceFtp {
  //url: string = 'https://www.freetogame.com/api/games/';
  url: string = '../assets/PackageJsonFreeToPlay/ftpJson.json';
  urlcategory: string = '../assets/PackageJsonFreeToPlay/';
  constructor(private http: HttpClient) {}
  public getFtp(category = ''): Observable<any> {
    if (category != '') {
      return this.http.get(`${this.urlcategory}${category}.json`);
    } else {
      return this.http.get(this.url);
    }
  }

  public test() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
//he jimmy bosses sur ton pc on essaye d'integrer le composant pollution
//tu me recois
//jimmy

    xhr.open(
      'GET',
      'https://free-to-play-games-database.p.rapidapi.com/api/games'
    );
    xhr.setRequestHeader(
      'x-rapidapi-key',
      'c9c8219b1fmshae846da025fd5c6p111095jsn2f652963534a'
    );
    xhr.setRequestHeader(
      'x-rapidapi-host',
      'free-to-play-games-database.p.rapidapi.com'
    );
    xhr.send(data);
  }
}

//return this.http.get(`${this.url}?category=${category}`);
