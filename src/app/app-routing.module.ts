import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import {GalleriesComponent} from './components/galleries/galleries.component';
import {GalleriesDetailsComponent} from './components/galleries/galleries-details/galleries-details.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthorsComponent} from './components/authors/authors.component';
import {AuthorsDetailsComponent} from './components/authors/authors-details/authors-details.component';
import {GalleryResolver} from './shared/resolvers/gallery.resolver';

const appRoutes: Routes = [
    {
        path: '',
        component: GalleriesComponent,
    },{
        path: 'galleries/:id',
        component: GalleriesDetailsComponent,
        resolve: {
            gallery: GalleryResolver
        }

    },{
        path: 'galleries',
        redirectTo: ''
    },{
        path: 'authors/:id',
        component: AuthorsDetailsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}