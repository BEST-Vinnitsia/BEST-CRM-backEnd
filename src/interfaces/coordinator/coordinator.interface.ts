export interface ICoordinator {
    id: string;
    name: string;
    isActive: boolean;
    
    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface ICoordinatorGetById extends Pick<ICoordinator, 'id'> {}

export interface ICoordinatorCheckName extends Pick<ICoordinator, 'name'> {}

export interface ICoordinatorCreate extends Omit<ICoordinator, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ICoordinatorUpdate extends Omit<ICoordinator, 'name' | 'createdAt' | 'updatedAt'> {}

export interface ICoordinatorDelete extends Pick<ICoordinator, 'id'> {}