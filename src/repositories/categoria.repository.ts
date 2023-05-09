import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaMysqlDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.idcat,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.factura_mysql') dataSource: FacturaMysqlDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
