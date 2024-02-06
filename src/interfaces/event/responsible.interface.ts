export interface IResponsible {
    id: string;
    eventId: string;
    name: string;
    isActive: boolean;
    role: string;
    description: string;

    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface IResponsibleGetById extends Pick<IResponsible, 'id'> {}

export interface IResponsibleGetByEventId extends Pick<IResponsible, 'eventId'> {}

export interface IResponsibleCreate extends Omit<IResponsible, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IResponsibleUpdate extends Omit<IResponsible, 'createdAt' | 'updatedAt'> {}

export interface IResponsibleDeleteArray {
    responsibleId: string[];
}
