export interface IMemberToEvent {
    id: string;
    newEventId: string;
    responsibleId: string;
    memberId: string;
    excluded: boolean;
    excludedDate?: Date;

    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */