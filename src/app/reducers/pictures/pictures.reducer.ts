import { createAction, createReducer, on } from '@ngrx/store';
import {
  clear,
  incrementPage,
  loadPictures,
  loadPicturesSuccess,
} from './pictures.actions';

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
  data: any;
  loading: boolean;
  page: number;
  pictureSearch: string;
  largeImageURL: string;
  tags: string;
}

export const initialState: PicturesState = {
  data: {
    total: 0,
    totalHits: 0,
    hits: [],
  },
  loading: false,
  page: 1,
  pictureSearch: 'nature',
  largeImageURL: '',
  tags: '',
};

export const picturesReducer = createReducer(
  initialState,
  on(loadPictures, (state, action): PicturesState => {
    // console.log(action);
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadPicturesSuccess, (state, action): PicturesState => {
    // console.log(action);
    return {
      ...state,
      data: action.data,
      loading: false,
    };
  }),
  on(incrementPage, (state, action): PicturesState => {
    // console.log(action);
    return {
      ...state,
      page: state.page + 1,
    };
  }),
  on(
    clear,
    (state): PicturesState => ({
      ...state,
      data: [],
    })
  )
);
