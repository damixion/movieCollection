import { NgModule } from '@angular/core';
import { MatButtonModule  } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule

  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule

  ]
})
export class MaterialModule {}
// /Here is your key: 2e15ac39
