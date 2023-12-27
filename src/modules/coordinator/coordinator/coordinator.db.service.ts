import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinator_Db_Create,
  ICoordinator_Db_Create_Res,
  ICoordinator_Db_GetById,
  ICoordinator_Db_GetById_Res,
  ICoordinator_Db_GetList_Res,
} from 'src/types/coordinator.type';

@Injectable()
export class CoordinatorDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ name, is_active, committee_is_active }: ICoordinator_Db_Create): Promise<ICoordinator_Db_Create_Res> {
    const lga = await handlerError(this.database.coordinator.create({ data: { name, is_active, committee_is_active } }));
    return lga;
  }

  public async findAll(): Promise<ICoordinator_Db_GetList_Res[]> {
    const lga = await handlerError(this.database.coordinator.findMany());
    return lga;
  }

  public async findById({ id }: ICoordinator_Db_GetById): Promise<ICoordinator_Db_GetById_Res> {
    const lga = await handlerError(this.database.coordinator.findUnique({ where: { id } }));
    return lga;
  }
}
