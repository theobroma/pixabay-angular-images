import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ImageService } from 'src/app/image.service';
import { loadPictures, loadPicturesSuccess } from './pictures.actions';

@Injectable()
export class PicturesEffects {
  loadPicturesData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPictures),
      mergeMap(() =>
        this.imageService.getImages().pipe(
          map((picturesData) => loadPicturesSuccess(picturesData)),
          // catchError(() => EMPTY)
          catchError(() => of({ type: '[Pictures] Load Pictures Failure' }))
        )
      )
    );
  });

  constructor(private actions$: Actions, private imageService: ImageService) {}
}
