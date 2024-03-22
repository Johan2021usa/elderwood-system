import {Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { NgForm } from '@angular/forms';
import { Reserva } from '../../models/reserva';

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
    M.AutoInit(); 
    /** This is required to recharge the materialized components every time we open one of them 
     * Ohterwise, elements like select or other that required M-init.js won't work.
    */
  };
  
  crearReserva(form?:NgForm){
    this.reservaService.postReserva(form?.value)
    .subscribe(
      res=>{
        this.resetForm(form);
        M.toast({html: 'Reserva guardada satisfactoriamente'});
      }
    )
  };

  // no tocar
  reservas : any;

  getAllReservas(){
    this.reservaService.getReservas().
    subscribe(res=>{
      this.reservas = res;
    });
  };
  
  resetForm(form?:NgForm){
    if(form){
      form.reset();
    };
  };

}
