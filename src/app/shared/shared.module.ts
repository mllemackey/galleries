import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GalleriesService } from './services/galleries.service';
import { AuthService } from './services/auth.service';
import { GalleryResolver } from './resolvers/gallery.resolver';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    GalleriesService,
    AuthService,
    GalleryResolver,
    AuthGuard,
    GuestGuard
  ]
})
export class SharedModule { }
