export interface ICadence {
    id: string;
    number: number;
    isEnd: boolean;
    startDate: Date;
    endDate: Date;

    createdAt: Date;
    updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */
export interface ICadenceGetById extends Pick<ICadence, 'id'> {}

/* ----------------  POST  ---------------- */
export interface ICadenceCreate extends Omit<ICadence, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ICadenceUpdate extends Omit<ICadence, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ICadenceDeleteArray {
    cadencesId: string[];
}
