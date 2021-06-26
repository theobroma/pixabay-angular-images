import { createAction, createReducer, on } from "@ngrx/store";
export const clear = createAction('[PICTURES] clear');

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
  on(clear, state => ({
    ...state,
    data: []
  }))
);
