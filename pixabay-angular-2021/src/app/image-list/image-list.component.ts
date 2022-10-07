import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';
import {
  loadPictures,
  incrementPage,
} from '../reducers/pictures/pictures.actions';
import { HitsEntity } from '../reducers/pictures/pictures.model';
import { selectPicturesHits } from '../reducers/pictures/pictures.selectors';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  hits$: Observable<HitsEntity[]> = this.store.select(selectPicturesHits);

  constructor(private imageService: ImageService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadPictures());
  }

  handleLoadMore() {
    this.store.dispatch(incrementPage());
  }
}
