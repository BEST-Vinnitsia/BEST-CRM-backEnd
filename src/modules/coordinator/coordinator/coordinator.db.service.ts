import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICoordinatorDbCreate,
  ICoordinatorDbCreateRes,
  ICoordinatorDbGetById,
  ICoordinatorDbGetByIdRes,
  ICoordinatorDbGetListRes,
} from 'src/types/coordinator.type';

@Injectable()
export class CoordinatorDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({
    name,
    is_active,
    committee_is_active,
  }: ICoordinatorDbCreate): Promise<ICoordinatorDbCreateRes> {
    const lga = await handlerError(
      this.database.coordinator.create({ data: { name, is_active, committee_is_active } }),
    );
    return lga;
  }

  public async findAll(): Promise<ICoordinatorDbGetListRes[]> {
    const lga = await handlerError(this.database.coordinator.findMany());
    return lga;
  }

  public async findById({ id }: ICoordinatorDbGetById): Promise<ICoordinatorDbGetByIdRes> {
    const lga = await handlerError(this.database.coordinator.findUnique({ where: { id } }));
    return lga;
  }
}
