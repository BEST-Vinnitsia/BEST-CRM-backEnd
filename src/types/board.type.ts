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
export interface IBoard_get_id_RES extends IBoard {}

// check by number
export interface IBoard_check_name extends Pick<IBoard, 'name'> {}
export interface IBoard_check_name_RES extends IBoard {}

/* ----------------  POST  ---------------- */
export interface IBoard_create extends Omit<IBoard, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IBoard_create_RES extends IBoard {}

/* ----------------  PUT  ---------------- */
export interface IBoard_update extends Omit<IBoard, 'name' | 'createdAt' | 'updatedAt'> {}
export interface IBoard_update_RES extends IBoard {}

/* ----------------  DELETE  ---------------- */
export interface IBoard_delete extends Pick<IBoard, 'id'> {}
export interface IBoard_delete_RES extends IBoard {}
