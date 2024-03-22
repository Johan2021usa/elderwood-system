import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HabitacionService } from './services/habitacion.service';

const routes: Routes = [
  {'path': '', component:HomeComponent},
  {'path': 'reservas', component:ReservasComponent},
  {'path': 'habitaciones', component:HabitacionService},
  {'path': 'hoteles', component:HotelesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
