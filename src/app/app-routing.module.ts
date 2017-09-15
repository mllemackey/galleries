import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { GalleriesDetailsComponent } from './components/galleries/galleries-details/galleries-details.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsDetailsComponent } from './components/authors/authors-details/authors-details.component';
import { GalleryResolver } from './shared/resolvers/gallery.resolver';
import { GuestGuard } from './shared/guards/guest.guard';
import { GalleriesFormComponent } from './components/galleries/galleries-form/galleries-form.component';
import { AuthGuard } from './shared/guards/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: GalleriesComponent,
    },{
        path: 'galleries/:id',
        component: GalleriesDetailsComponent,
        resolve: {
            gallery: GalleryResolver
        },
        canActivate: [AuthGuard],
    }, {
        path: 'galleries',
        redirectTo: ''
    }, {
        path: 'create',
        component: GalleriesFormComponent,
        canActivate: [AuthGuard],
    }, {
        path: 'my-gallery',
        component: GalleriesFormComponent,
        canActivate: [AuthGuard],
    }, {
        path: 'authors/:id',
        component: AuthorsDetailsComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [GuestGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [GuestGuard],
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
