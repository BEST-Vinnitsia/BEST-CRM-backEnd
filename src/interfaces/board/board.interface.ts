export interface IBoard {
  id: string;
  name: string;
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get by id
export interface IBoardGetById extends Pick<IBoard, 'id'> {}

/* ----------------  POST  ---------------- */
export interface IBoardCreate extends Omit<IBoard, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IBoardUpdate extends Omit<IBoard, 'name' | 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IBoardDelete extends Pick<IBoard, 'id'> {}
