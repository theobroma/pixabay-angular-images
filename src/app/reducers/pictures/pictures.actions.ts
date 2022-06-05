import { createAction, props } from '@ngrx/store';

export const clear = createAction('[PICTURES] Clear');
export const incrementPage = createAction('[PICTURES] Increment Page');

export const loadPictures = createAction(
  '[Pictures] Load Pictures',
  props<{ payload: any }>()
);

export const loadPicturesSuccess = createAction(
  '[Pictures] Load Pictures Success',
  props<{ payload: any }>()
);

export const loadPicturesFailure = createAction(
  '[Pictures] Load Pictures Failure',
  props<{ payload: any }>()
);
