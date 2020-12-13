import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionMovieComponent } from './collection-movie/collection-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  {path: '', component: CollectionMovieComponent },
  {path: 'search', component: SearchMovieComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
