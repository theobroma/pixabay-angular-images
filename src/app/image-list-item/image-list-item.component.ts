import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.scss']
})
export class ImageListItemComponent implements OnInit {

  @Input() image: any;

  constructor() { }

  ngOnInit(): void {
  }

}
