import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { GalleriesDetailsComponent } from './components/galleries/galleries-details/galleries-details.component';
import { RegisterComponent } from './components/register/register.component';
import { GalleriesRowComponent } from './components/galleries/galleries-row/galleries-row.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsDetailsComponent } from './components/authors/authors-details/authors-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    GalleriesComponent,
    GalleriesDetailsComponent,
    RegisterComponent,
    GalleriesRowComponent,
    AuthorsComponent,
    AuthorsDetailsComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule,
      SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
