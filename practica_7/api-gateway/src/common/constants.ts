export enum RabbitMQ {
  ProcesoQueue = 'procesos',
  DocumentoQueue = 'documentos',
  SolicitudQueue = 'solicitud'
}

export enum ProcesoMSG {
  CREATE = 'CREATE_PROCESO',
  FIND_ALL = 'FIND_PROCESOS',
  FIND_ONE = 'FIND_PROCESO',
  UPDATE = 'UPDATE_PROCESO',
  DELETE = 'DELETE_PROCESO',
}

export enum DocumentoMSG {
  CREATE = 'CREATE_DOCUMENTO',
  FIND_ALL = 'FIND_DOCUMENTOS',
  FIND_ONE = 'FIND_DOCUMENTO',
  UPDATE = 'UPDATE_DOCUMENTO',
  DELETE = 'DELETE_DOCUMENTO',
}


export enum SolicitudBajaMSG {
  CREATE = 'CREATE_SOLICITUD',
  FIND_ALL = 'FIND_SOLICITUDES',
  FIND_ONE = 'FIND_SOLICITUD',
  UPDATE = 'UPDATE_SOLICITUD',
  DELETE = 'DELETE_SOLICITUD',
}
