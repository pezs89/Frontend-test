import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarWarsPageComponent } from './containers/star-wars-page.component';

const routes: Routes = [{ path: '', component: StarWarsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarWarsRoutingModule {}
