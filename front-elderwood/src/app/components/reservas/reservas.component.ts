import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { NgForm } from '@angular/forms';
import { Reserva } from '../../models/reserva';
import { HtmlParser } from '@angular/compiler';

declare var M:any;
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
  providers: [ReservaService]
})
export class ReservasComponent implements OnInit, AfterViewInit{

  @ViewChild('reservaTable') reservaTable? : Renderer2; 
  @ViewChild('reservaTable') table?: ElementRef; // selector table

  constructor(
    public reservaService:ReservaService
    ){};
  
  ngOnInit(): void {
    M.AutoInit(); 
    /** This is required to recharge the materialized components every time we open one of them 
     * Ohterwise, elements like select or other that required M-init.js won't work.
    */
  };

  ngAfterViewInit(): void {
    this.reservaTable;
    this.table;
  }
  
  // no tocar
  reservas : any;
  getAllReservas(){
    if(this.table?.nativeElement.getAttribute("hidden","hidden")){
      this.reservaService.getReservas().
      subscribe(res=>{
        this.table?.nativeElement.removeAttribute('hidden', "hidden");
        // data
        this.reservas = res;
        //console.log(this.reservas);
      });
    }else{
      this.table?.nativeElement.setAttribute('hidden', "hidden");
    }
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
  
  resetForm(form?:NgForm){
    if(form){
      form.reset();
    };
  };

}
