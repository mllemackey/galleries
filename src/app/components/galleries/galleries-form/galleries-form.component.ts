import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../../shared/models/gallery.model';
import { AuthService } from '../../../shared/services/auth.service';
import { GalleriesService } from '../../../shared/services/galleries.service';

@Component({
  selector: 'app-galleries-form',
  templateUrl: './galleries-form.component.html'
})
export class GalleriesFormComponent implements OnInit {

  constructor(private authService: AuthService,
              private galleriesService: GalleriesService) {
  }

  private newGallery: Gallery  = new Gallery();

  private imageUrls: string[] = [''];

  addUrl() {
    this.imageUrls.push('');
  }

  removeUrl() {
    this.imageUrls.pop();
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  addGallery(newGallery){
    let user = this.authService.loggedInUser;
    newGallery.author = user;
    newGallery.images = this.imageUrls;
    this.galleriesService.addGallery(newGallery).subscribe();
  }

  ngOnInit() {
  }

}
