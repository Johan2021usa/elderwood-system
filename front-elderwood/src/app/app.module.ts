import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminisComponent } from './components/adminis/adminis.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminisComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HabitacionesComponent,
    HotelesComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
