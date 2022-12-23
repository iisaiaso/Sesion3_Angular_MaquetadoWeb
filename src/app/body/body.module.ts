import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TitleComponent } from './title/title.component';
import { DescripcionComponent } from './descripcion/descripcion.component';



@NgModule({
  declarations: [
    CardComponent,
    TitleComponent,
    DescripcionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    TitleComponent,
    DescripcionComponent
  ],
})
export class BodyModule { }
