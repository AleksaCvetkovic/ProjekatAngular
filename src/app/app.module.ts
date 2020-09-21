import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { KategorijeComponent } from './components/kategorije/kategorije.component';
import { MainbarComponent } from './components/mainbar/mainbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { JelovnikComponent } from './components/jelovnik/jelovnik.component';
import { KartaPicaComponent } from './components/kartaPica/karta.pica.component';
import { DesertComponent } from './components/desert/desert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   KategorijeComponent,
   MainbarComponent,
    MainbarComponent,
    JelovnikComponent,
    KartaPicaComponent,
    DesertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
