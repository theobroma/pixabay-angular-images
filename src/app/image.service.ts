import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PicturesDataType } from './reducers/pictures/pictures.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  // Request URL: https://pixabay.com/api/?key=21006895-bfaaa89652a3d7d5175478097&
  // q=nature&image_type=photo&orientation=horizontal&per_page=12&page=1

  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;

  constructor(private http: HttpClient) {}

  getImages(): Observable<PicturesDataType> {
    // let params = new HttpParams().set('key', this.API_KEY);
    let params = new HttpParams({
      fromString: `q=nature&image_type=photo&orientation=horizontal&per_page=12&page=1`,
    });
    params = params.append('key', this.API_KEY);

    return this.http
      .get<PicturesDataType>(this.API_URL, { params: params })
      .pipe(
        tap((_) => this.log('fetched pictures'))
        // catchError(this.handleError<ImagesDataType>('getImages', {}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`ImageService: ${message}`);
  }
}
