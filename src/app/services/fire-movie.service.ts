import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { $ } from 'protractor';
import { ReserveMovie } from '../models/reservMovie';

@Injectable({
  providedIn: 'root'
})
export class FireMovieService {

  movieList: AngularFireList<any> = null;

  constructor(private firebase: AngularFireDatabase)
   {
    this.movieList = firebase.list('/collection-movie');
   }

  getMovies(): AngularFireList<any>
  {

    return this.movieList;
  }

  addMovies(nMovie: ReserveMovie): void
  {
    this.movieList.push(nMovie);
    console.log('dziaa');
  }

  deleteMovies(index: string): void
  {
      this.movieList.remove(index);
  }




}
