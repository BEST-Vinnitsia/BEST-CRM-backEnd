export interface IBoard {
  id: string;
  name: string;
  isActive: boolean;
  committeeIsActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get by id
export interface IBoardGetById extends Pick<IBoard, 'id'> {}

// check by number
export interface IBoardCheckName extends Pick<IBoard, 'name'> {}

/* ----------------  POST  ---------------- */
export interface IBoardCreate extends Omit<IBoard, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IBoardUpdate extends Omit<IBoard, 'name' | 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IBoardDelete extends Pick<IBoard, 'id'> {}
