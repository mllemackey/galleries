import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html'
})
export class GalleriesComponent implements OnInit {

    private galleries: any =  [];
  constructor() { }

  ngOnInit() {
  }

}
