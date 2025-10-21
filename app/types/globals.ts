export enum MessageType {
    Notificacion = 0,
    Confirmacion = 1,
}

export type ListadoRequest = {
    inicio: number;
    fin: number;
};
