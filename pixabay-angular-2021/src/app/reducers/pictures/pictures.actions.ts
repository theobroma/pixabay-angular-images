import { createAction } from '@ngrx/store';
import { PicturesDataType } from './pictures.model';

export const clear = createAction('[PICTURES] Clear');
export const incrementPage = createAction('[PICTURES] Increment Page');

export const loadPictures = createAction('[Pictures] Load Pictures');

export const loadPicturesSuccess = createAction(
  '[Pictures] Load Pictures Success',
  (data: PicturesDataType) => ({ data })
);

export const loadPicturesFailure = createAction(
  '[Pictures] Load Pictures Failure',
  (err: any) => ({ err })
);
