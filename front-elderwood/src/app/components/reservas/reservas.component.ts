import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';

declare var M:any;
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
  providers: [ReservaService]
})
export class ReservasComponent implements OnInit{

  constructor(public reservaService:ReservaService){};

  ngOnInit(): void {
  }
}
