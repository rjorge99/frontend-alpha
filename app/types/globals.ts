export enum MessageType {
    Notificacion = 0,
    Confirmacion = 1
}

export interface ListadoRequest {
    inicio: number;
    fin: number;
}
