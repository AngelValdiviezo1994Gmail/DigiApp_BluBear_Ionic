
export class ProspectoTypeResponseModel {
    succeeded: boolean;
    message:  string;
    statusCode:  string;
    data: ProspectoTypeModel;

    constructor(_succeeded: boolean, _message: string, _statusCode: string, _data: ProspectoTypeModel){
        this.succeeded = _succeeded;
        this.message = _message;
        this.statusCode = _statusCode;
        this.data = _data;
    }
}

export class ProspectoTypeModel {
    id:  string;
    tipoIdentificacion:  string;
    identificacion:  string;
    nombres:  string;
    apellidos:  string;
    alias:  string;
    celular:  string;
    grupoEmpresarial:  string;
    codigoEmpresa:  string;
    area:  string;
    departamento:  string;
    fechaNacimiento:  string;
    genero:  string;
    direccion:  string;
    latitud:  number;
    longitud:  number;
    email:  string;
    fechaNacDate:  Date;
    password:  string;
    tipoCliente:  string;
    autorizadoPor:  string;

    constructor(_id: string, _tipoIdentificacion: string, _identificacion: string, _nombres: string,
        _apellidos: string, _alias: string, _celular: string, _grupoEmpresarial: string, _codigoEmpresa: string,
        _area: string, _departamento: string, _fechaNacimiento: string, _genero: string, _direccion: string,
        _latitud: number, _longitud: number, _email: string, _fechaNacDate: Date, _password: string, _tipoCliente: string,
        _autorizadoPor: string){
        this.id = _id;
        this.tipoIdentificacion = _tipoIdentificacion;
        this.identificacion = _identificacion;
        this.nombres = _nombres;
        this.apellidos = _apellidos;
        this.alias = _alias;
        this.celular = _celular;
        this.grupoEmpresarial = _grupoEmpresarial;
        this.codigoEmpresa = _codigoEmpresa;
        this.area = _area;
        this.departamento = _departamento;
        this.fechaNacimiento = _fechaNacimiento;
        this.genero = _genero;
        this.direccion = _direccion;
        this.latitud = _latitud;
        this.longitud = _longitud;
        this.email = _email;
        this.fechaNacDate = _fechaNacDate;
        this.password = _password;
        this.tipoCliente = _tipoCliente;
        this.autorizadoPor = _autorizadoPor;
    }
}