import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import {GalleriesComponent} from './components/galleries/galleries.component';
import {GalleriesDetailsComponent} from './components/galleries/galleries-details/galleries-details.component';
import {RegisterComponent} from './components/register/register.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/galleries',
        pathMatch: 'full'
    },{
        path: 'galleries',
        component: GalleriesComponent,
        children: [
            {
                path: ':id',
                component: GalleriesDetailsComponent
            }
        ]
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