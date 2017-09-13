import {Component, Input, OnInit} from '@angular/core';
import {Gallery} from '../../../shared/models/gallery.model';

@Component({
  selector: '[galleryRow]',
  templateUrl: './galleries-row.component.html'
})
export class GalleriesRowComponent implements OnInit {

    public gallery: Gallery;

    @Input()
    set galleryRow(gallery: Gallery){
        this.gallery = gallery;
    }

  constructor() { }

  ngOnInit() {
  }

}
