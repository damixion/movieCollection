import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/ModelMovie';


@Injectable({
  providedIn: 'root'
})
export class MovieHttpService {

  constructor(private http: HttpClient) { }

  getMovie(title: string): Observable<Movie>
  {
    return this.http.get<Movie>('http://www.omdbapi.com/?apikey=2e15ac39&t=' + title );
  }

}
