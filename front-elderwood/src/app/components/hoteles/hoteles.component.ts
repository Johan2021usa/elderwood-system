import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { NgControl, NgForm } from '@angular/forms';
import { Hotel } from '../../models/hotel';

declare var M:any;
@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrl: './hoteles.component.css',
  providers: [HotelService]
})
export class HotelesComponent implements OnInit{

  constructor(public HotelService:HotelService){};

  ngOnInit(): void {
    M.AutoInit();
    /** Este componente carga el autoinit.js cuando el componente es cargado */
  };

  crearHotel(form?:NgForm){
    this.HotelService.PostHotel(form?.value).subscribe(
      res=>{
        this.resetForm(form);
        M.toast({html: "Guardado satisfactoriamente"});
      }
    );
  };

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.HotelService.selectedHotel = new Hotel();  
    };
  };

}