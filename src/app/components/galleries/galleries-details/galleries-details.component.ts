import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Gallery} from '../../../shared/models/gallery.model';

@Component({
  selector: 'app-galleries-details',
  templateUrl: './galleries-details.component.html'
})
export class GalleriesDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
    public gallery: Gallery;

  ngOnInit() {

      this.route.data
          .subscribe((data: {gallery: Gallery}) => {
          console.log(data);
              this.gallery = data.gallery;
          });

  }

}
