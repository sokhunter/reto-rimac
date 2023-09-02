export interface Planet {
  id: string;
  nombre: string;
  periodo_rotacion: string;
  periodo_orbita: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  superficie_agua: string;
  poblacion: string;
  url: string;
  f_creacion: Date;
  f_edicion: Date;
  swapi_id?: string;
}