import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaMongoDataSource} from '../datasources';
import {Factura, FacturaRelations} from '../models';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.idfactura,
  FacturaRelations
> {
  constructor(
    @inject('datasources.factura_mongo') dataSource: FacturaMongoDataSource,
  ) {
    super(Factura, dataSource);
  }
}
