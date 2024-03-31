
export class ClientTypeResponseModel {
    token:    string;
    mensaje:  string;

    constructor(_token: string, _mensaje: string){
        this.token = _token;
        this.mensaje = _mensaje;
    }
}