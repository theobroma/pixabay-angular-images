import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';
import { PicturesDataType } from '../reducers/pictures/pictures.model';

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

  data: any = {};
  // movies$: Observable<Movie[]> = this.store.select(state => state.movies);
  picturesData$: Observable<PicturesDataType> = this.store.select(state => state.pictures);

  constructor(private imageService: ImageService,private store: Store<any>) { }

  ngOnInit() {
    // this.getImages();
    this.store.dispatch({ type: '[Pictures] Load Pictures' });
  }

  // getImages(): void {
  //   this.imageService.getImages()
  //   .subscribe(data => this.data = data);
  // }

}
