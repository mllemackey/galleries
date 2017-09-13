import {Component, Injector} from '@angular/core';
import { Gallery } from '../../shared/models/gallery.model';
import { HttpErrorResponse } from '@angular/common/http';
import { GalleriesService } from '../../shared/services/galleries.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html'
})
export class GalleriesComponent {

    public galleries: any[] = [];
    private galleriesService: GalleriesService;

    constructor(private injector: Injector) {
        this.galleriesService = this.injector.get(GalleriesService);
        this.galleriesService.getGalleries().subscribe(
            data => {
                this.galleries = data;
            },
            (err: HttpErrorResponse) => {
                alert(`Backend returned code ${err.status} with message: ${err.error}`);
            }
        );

    }
}
