export interface ICoordinatorToMemberPrisma {
    id: number;
    memberId: number;
    coordinatorId: number;
    cadenceId: number;
    excluded: boolean;
    excludedDate: Date | number;
    createdAt: Date;
    updatedAt: Date;
}
