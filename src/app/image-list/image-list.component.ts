import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';
import { selectPicturesHits } from '../reducers/pictures/pictures.selectors';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  // image: any = {
  //   webformatURL:"https://pixabay.com/get/gc213f9be587e50ede71fa6586855c0f2b3a82c7049b872e749b155f22d8cee4ed7ff93bc4cb9016e6c579d0ff1bbecca_640.jpg",
  //   userImageURL:"https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg",
  //   user: "Bessi",
  //   tags:"tree, sunset, clouds",
  //   pageURL:"https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/",
  //   likes:5506,
  //   comments:1054,
  // };

  // movies$: Observable<Movie[]> = this.store.select(state => state.movies);
  hits$: Observable<any> = this.store.select(selectPicturesHits);

  constructor(private imageService: ImageService,private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch({ type: '[Pictures] Load Pictures' });
  }

  handleLoadMore() {
    this.store.dispatch({ type: '[PICTURES] increment page' });
  }

}
