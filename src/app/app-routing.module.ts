import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { KategorijeComponent } from './components/kategorije/kategorije.component';
import { JelovnikComponent } from './components/jelovnik/jelovnik.component';
import { KartaPicaComponent } from './components/kartaPica/karta.pica.component';
import { DesertComponent } from './components/desert/desert.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'kategorije', component: KategorijeComponent},
  {path: 'jelovnik', component: JelovnikComponent},
  {path: 'desert', component: DesertComponent},
  {path: 'kartapica', component: KartaPicaComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
