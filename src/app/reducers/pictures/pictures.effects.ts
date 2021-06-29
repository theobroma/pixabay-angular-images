import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ImageService } from 'src/app/image.service';

@Injectable()
export class PicturesEffects {

  loadPicturesData$ = createEffect(() => { return this.actions$.pipe(
    ofType('[Pictures] Load Pictures'),
    mergeMap(() => this.imageService.getImages()
      .pipe(
        map(picturesData => ({ type: '[Pictures] Pictures Loaded Success', payload: picturesData })),
        // catchError(() => EMPTY)
        catchError(() => of({ type: '[Pictures] Pictures Loaded Error' }))
      ))
    ) }
  );

  constructor(
    private actions$: Actions,
    private imageService: ImageService
  ) {}
}
