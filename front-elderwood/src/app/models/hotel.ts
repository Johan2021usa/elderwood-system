export class Hotel {
    constructor(_id="",codigo="",nombreHotel="",descripcion="",numeroContacto="",correo=""){
        this._id =_id;
        this.codigo = codigo;
        this.nombreHotel = nombreHotel;
        this.descripcion = descripcion;
        this.numeroContacto = numeroContacto;
        this.correo = correo;
    }

    _id:string; // This underscore _ is for MongoDB
    codigo:string;
    nombreHotel:string;
    descripcion:string;
    numeroContacto:string;
    correo:string;


}
