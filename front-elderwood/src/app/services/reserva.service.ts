import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  selectedReserva: Reserva;
  reservas: Reserva[];
  readonly URL_API='http://localhost:9000/api/reserva'

  constructor(private http: HttpClient){
    this.selectedReserva = new Reserva;
    this.reservas = [];
  }

  // GET ALL RESERVAS
  getReservas(){
    return this.http.get(this.URL_API);
  }

  // GET Reserva by id
  getResevaId(_id:string){
    return this.http.get(this.URL_API+ `/${_id}`);
  }

  // POST Reserva
  postReserva(Reserva:Reserva){
    return this.http.post(this.URL_API,Reserva);
  }
  
  // PUT Reserva
  putReserva(Reserva:Reserva){
    return this.http.put(this.URL_API+ `/${Reserva._id}`, Reserva);
  }

  // DELETE Reserva by id
  deleteReserva(_id:string){
    return this.http.delete(this.URL_API+ `/${_id}`)
  }
}
