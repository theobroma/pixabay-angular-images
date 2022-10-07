import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PicturesState } from './pictures.reducer';

export const selectPicturesState =
  createFeatureSelector<PicturesState>('pictures');

export const selectPictures = createSelector(
  selectPicturesState,
  (state: PicturesState) => state
);

export const selectPicturesHits = createSelector(
  selectPictures,
  (pictures) => pictures.data.hits
);
