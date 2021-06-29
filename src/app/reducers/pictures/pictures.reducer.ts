import { createAction, createReducer, on, props } from "@ngrx/store";
export const clear = createAction('[PICTURES] clear');

export const loadPictures = createAction(
  '[Pictures] Load Pictures',
  props<{payload:any}>()
);

export const loadPicturesSuccess = createAction(
  '[Pictures] Load Pictures Success',
  props<{payload:any}>()
);

export const loadPicturesFailure = createAction(
  '[Pictures] Load Pictures Failure',
  props<{payload:any}>()
);


// const picturesInitialState = {
//   data: {
//     total: 0,
//     totalHits: 0,
//     hits: [],
//   } as PicturesDataType,
//   loading: false,
//   page: 1,
//   pictureSearch: 'nature',
//   largeImageURL: '',
//   tags: '' as string,
// };

export interface PicturesState {
  data: any,
  loading: boolean,
  page: number,
  pictureSearch: string,
  largeImageURL: string,
  tags:string,
}

export const initialState: PicturesState = {
  data: {
    total: 0,
    totalHits: 0,
    hits: [],
  } ,
  loading: false,
  page: 1,
  pictureSearch: 'nature',
  largeImageURL: '',
  tags: '' ,
};

export const picturesReducer = createReducer(
  initialState,
  on(loadPictures, (state,action) =>{
    // console.log(action);
    return ({
      ...state, loading: true
    })}
  ),
  on(loadPicturesSuccess, (state,action) =>{
    // console.log(action);
    return ({
      ...state, data: action.payload,
      loading: false
    })}
  ),
  on(clear, state => ({
    ...state,
    data: []
  }))
);
