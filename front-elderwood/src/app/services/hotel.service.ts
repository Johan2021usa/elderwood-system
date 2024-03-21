import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

selectedHotel: Hotel;
hoteles: Hotel[];
readonly URL_API="http://localhost:9000/api/hotel"

constructor(private http: HttpClient){
  this.selectedHotel = new Hotel;
  this.hoteles = [];
}

//GET ALL HOTELES
getHoteles(){
  return this.http.get(this.URL_API);
}

//GET Hotel by id
getHotelId(_id:string){
  return this.http.get(this.URL_API+ `/${_id}`)
}

//POST Hotel
PostHotel(Hotel:Hotel){
  return this.http.post(this.URL_API,Hotel);
}

// Put Hotel
putHotel(Hotel:Hotel){
return this.http.put(this.URL_API+ `/${Hotel._id}`,Hotel);
}

//Delete Reserva by id
deleteHotel(_id:string){
  return this.http.delete(this.URL_API+ `/${_id}`)
}

} 
