import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/star-wars', pathMatch: 'full' },
  {
    path: 'star-wars',
    loadChildren: () =>
      import('./star-wars/star-wars.module').then((m) => m.StarWarsModule),
  },
  { path: '**', redirectTo: '/star-wars', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
