import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transit-view',
  templateUrl: './transit-view.page.html',
  styleUrls: ['./transit-view.page.scss'],
})
export class TransitViewPage implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/view-captured');
    }, 2000);
  }
}