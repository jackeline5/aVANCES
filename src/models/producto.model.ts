import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Categoria} from './categoria.model';

@model({
  settings: {
    foreignKeys: {
      fkCategoriaProducto: {
        name: 'fkCategoriaProducto',
        entity: 'Categoria',
        entityKey: 'idcat',
        foreignKey: 'categoriaId',
      },
    },
  },
})
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idprod?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  detalle: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @belongsTo(() => Categoria)
  categoriaId: number;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
