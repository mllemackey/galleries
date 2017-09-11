import {Component, Input, OnInit} from '@angular/core';
import {Gallery} from '../../../shared/gallery.model';

@Component({
  selector: 'app-galleries-row',
  templateUrl: './galleries-row.component.html'
})
export class GalleriesRowComponent implements OnInit {

    private gallery: Gallery = null;

    @Input()
    set galleryRow(gallery: Gallery){
        this.gallery = gallery;
    }

  constructor() { }

  ngOnInit() {
  }

}
