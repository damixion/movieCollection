import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/ModelMovie';
import { ReserveMovie } from '../models/reservMovie';
import { FireMovieService } from '../services/fire-movie.service';
import { MovieHttpService } from '../services/movie-http.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  constructor(private mvHttp: MovieHttpService, private firebase: FireMovieService) { }

  newMovie: Movie;
  searchTitle = '';
  ngOnInit(): void {
  }

  getMovie(): void
  {
    this.mvHttp.getMovie(this.searchTitle).subscribe( result => {
        this.newMovie = result;
        console.log(result);
    });
    this.searchTitle = '';
  }

  addToCollection(): void
  {
    const mv: ReserveMovie = {
       Title: this.newMovie.Title,
       Runtime: this.newMovie.Runtime,
       Genre: this.newMovie.Genre,
       Plot: this.newMovie.Plot,
       imdbRating: this.newMovie.imdbRating,
       Type: this.newMovie.Type
      };

    this.firebase.addMovies(mv);

  }

}
