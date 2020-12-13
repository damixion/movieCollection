import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReserveMovie } from '../models/reservMovie';
import { FireMovieService } from '../services/fire-movie.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection-movie',
  templateUrl: './collection-movie.component.html',
  styleUrls: ['./collection-movie.component.scss']
})
export class CollectionMovieComponent implements OnInit {


  listMv: any[];
  keyFire: string[];

  constructor(private fireService: FireMovieService) { }

  ngOnInit(): void { this.getMovie(); }

  getMovie()
  {
   this.fireService.getMovies().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val()})
      )

    )
  ).subscribe(mv => {
    this.listMv = mv;
  });

  }

  delMove(index): void
  {
    this.fireService.deleteMovies(this.listMv[index].key);
  }


}
