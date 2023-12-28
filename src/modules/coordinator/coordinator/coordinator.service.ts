import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CoordinatorDbService } from './coordinator.db.service';
import {
  ICoordinator_Create,
  ICoordinator_Create_Res,
  ICoordinator_GetById,
  ICoordinator_GetById_Res,
  ICoordinator_GetList_Res,
} from 'src/types/coordinator.type';

@Injectable()
export class CoordinatorService {
  constructor(private readonly coordinatorDb: CoordinatorDbService) {}

  /**
   * create coordinator
   */
  async create(data: ICoordinator_Create): Promise<ICoordinator_Create_Res> {
    // check if coordinator is exist
    const coordinator = await this.coordinatorDb.findByName({ name: data.name });
    if (coordinator) throw new BadRequestException('this coordinator is exist');

    const newCoordinator = await this.coordinatorDb.create(data);
    return newCoordinator;
  }

  /**
   * get coordinator list
   */
  async getList(): Promise<ICoordinator_GetList_Res[]> {
    const coordinatorList = await this.coordinatorDb.findAll();
    return coordinatorList;
  }

  /**
   * get coordinator by id
   */
  async getById(data: ICoordinator_GetById): Promise<ICoordinator_GetById_Res> {
    // check if coordinator is exist
    const coordinator = await this.coordinatorDb.findById(data);
    if (!coordinator) throw new NotFoundException('this coordinator is not found');

    return coordinator;
  }
}
