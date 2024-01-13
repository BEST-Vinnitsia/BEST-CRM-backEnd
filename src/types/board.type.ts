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

// get list
export interface IBoard_get_list_RES extends IBoard {}

// get by id
export interface IBoard_get_id extends Pick<IBoard, 'id'> {}

// check by number
export interface IBoard_check_name extends Pick<IBoard, 'name'> {}

/* ----------------  POST  ---------------- */
export interface IBoard_create extends Omit<IBoard, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IBoard_update extends Omit<IBoard, 'name' | 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IBoard_delete extends Pick<IBoard, 'id'> {}
