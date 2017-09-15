import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class GalleriesService {

    private galleries: Gallery []= [];

    constructor(private http: HttpClient,
                private authService: AuthService,
                private router: Router) { }

    public getGalleries() {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/galleries', {
                headers: this.authService.getRequestHeaders(),
              }
            ).subscribe(
                    (galls: any[]) => {
                        galls.forEach(g => {
                          let images = [];
                          g.images.forEach(i => {
                            images.push(i.image_url);
                          });
                          let new_gallery = new Gallery(g.id, g.name, g.description,
                            images, g.user, g.created_at, g.updated_at);
                          this.galleries.push(new_gallery);
                        });
                        o.next(this.galleries);
                        return o.complete();
                    }
                );
        });
    }

  addGallery(newGallery) {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/create',{
        name: newGallery.name,
        description: newGallery.description,
        images: newGallery.images,
        user: newGallery.author
      },
        {
          headers: this.authService.getRequestHeaders(),
        }
      ).subscribe(() => {
        o.next(newGallery);
        this.router.navigateByUrl('');
        return o.complete();
      },
        (err: HttpErrorResponse) => {
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
        });
    });
  }


  public getGalleryById(id: number){
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/galleries/' + id)
                .subscribe(
                    (g: any) => {
                        o.next( g );
                        return o.complete();
                    }
                );
        });
    }
}
