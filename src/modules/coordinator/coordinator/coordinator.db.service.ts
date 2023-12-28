import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinator_Db_Create,
  ICoordinator_Db_Create_Res,
  ICoordinator_Db_GetById,
  ICoordinator_Db_GetById_Res,
  ICoordinator_Db_GetByName,
  ICoordinator_Db_GetByName_Res,
  ICoordinator_Db_GetList_Res,
} from 'src/types/coordinator.type';

@Injectable()
export class CoordinatorDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create coordinator
   */
  public async create({ name, is_active, committee_is_active }: ICoordinator_Db_Create): Promise<ICoordinator_Db_Create_Res> {
    const newCoordinator = await handlerError(
      this.database.coordinator.create({
        data: {
          name: name.toLocaleLowerCase(),
          is_active,
          committee_is_active,
        },
      }),
    );
    return newCoordinator;
  }

  /**
   * get coordinator list
   */
  public async findAll(): Promise<ICoordinator_Db_GetList_Res[]> {
    const coordinatorList = await handlerError(this.database.coordinator.findMany());
    return coordinatorList;
  }

  /**
   * get coordinator by id
   */
  public async findById({ id }: ICoordinator_Db_GetById): Promise<ICoordinator_Db_GetById_Res> {
    const coordinator = await handlerError(
      this.database.coordinator.findUnique({
        where: {
          id,
        },
      }),
    );
    return coordinator;
  }

  /**
   * get coordinator by name
   */
  public async findByName({ name }: ICoordinator_Db_GetByName): Promise<ICoordinator_Db_GetByName_Res> {
    const coordinator = await handlerError(
      this.database.coordinator.findUnique({
        where: {
          name: name.toLocaleLowerCase(),
        },
      }),
    );
    return coordinator;
  }
}
