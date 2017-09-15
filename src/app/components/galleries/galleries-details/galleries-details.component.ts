import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from '../../../shared/models/gallery.model';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-galleries-details',
  templateUrl: './galleries-details.component.html'
})
export class GalleriesDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private authService: AuthService) { }
    public gallery: any = {};

  ngOnInit() {

      this.route.data
          .subscribe((data: {gallery: any}) => {
              this.gallery = data.gallery;
          });

  }

}
