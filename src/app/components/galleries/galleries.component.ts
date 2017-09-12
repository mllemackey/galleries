import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { HttpClient } from '@angular/common/http';
import {Gallery} from '../../shared/gallery.model';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html'
})
export class GalleriesComponent implements OnInit{
    ngOnInit() {
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/galleries')
                .subscribe(
                    (galleries: any[]) => {
                        galleries.forEach(g => {
                            this.galleries.push(
                                new Gallery(g.id, g.name, g.description,
                                    g.user_id, g.created_at, g.updated_at));
                        });

                        o.next(this.galleries);
                        return o.complete();
                    }
                );
        });
    }

    public galleries: Gallery[];
    constructor(private http: HttpClient) {
    }

}
