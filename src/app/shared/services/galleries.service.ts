import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class GalleriesService {

    private galleries: Gallery []= [];
    constructor(private http: HttpClient) { }

    public getGalleries()
    {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/galleries')
                .subscribe(
                    (galls: any[]) => {
                        galls.forEach(g => {
                            console.log(g);
                            let new_gallery = new Gallery(g.id, g.name, g.description,
                                g.images, g.user, g.created_at, g.updated_at);
                            this.galleries.push(new_gallery);
                        });
                        console.log(this.galleries);
                        o.next(this.galleries);
                        return o.complete();
                    }
                );
        });
    }

    public getGalleryById(id: number)
    {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/galleries/' + id)
                .subscribe(
                    (g: any) => {
                        o.next(new Gallery(g.id, g.name, g.description, g.user_id,
                            g.created_at, g.updated_at));
                        return o.complete();
                    }
                );
        });
    }


}
