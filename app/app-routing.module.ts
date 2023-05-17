import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonneComponent } from './components/abonne/abonne.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'Abonne', component: AbonneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
