export enum RabbitMQ {
  SolicitudQueue = 'solicitud'
}

export enum SolicitudBajaMSG {
  CREATE = 'CREATE_SOLICITUD',
  FIND_ALL = 'FIND_SOLICITUDES',
  FIND_ONE = 'FIND_SOLICITUD',
  UPDATE = 'UPDATE_SOLICITUD',
  DELETE = 'DELETE_SOLICITUD',
}
