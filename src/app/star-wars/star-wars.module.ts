import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsPageComponent } from './containers/star-wars-page.component';

const CONTAINERS = [StarWarsPageComponent];

@NgModule({
  imports: [CommonModule, StarWarsRoutingModule],
  exports: [],
  declarations: [CONTAINERS],
  providers: [],
})
export class StarWarsModule {}
