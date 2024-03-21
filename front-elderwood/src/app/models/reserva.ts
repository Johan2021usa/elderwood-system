export class Reserva {
    constructor(_id="",codigo="",fechaInicioReserva="",fechaFinReserva="", estadoReserva=""){
        this._id =_id;
        this.codigo= codigo;
        this.fechaInicioReserva = fechaInicioReserva;
        this.fechaFinReserva = fechaFinReserva; 
        this.estadoReserva = estadoReserva;
    }

    _id:string;  // This underscore _ is for MongoDB
    codigo:string;
    fechaInicioReserva:string;
    fechaFinReserva:string;
    estadoReserva:string;
}
