import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GalleriesService } from './services/galleries.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    GalleriesService,
    AuthService
  ]
})
export class SharedModule { }
