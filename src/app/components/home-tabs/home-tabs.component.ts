import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.component.html',
  styleUrls: ['./home-tabs.component.scss'],
})
export class HomeTabsComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  viewCards(){
    this.router.navigate(['view-card']);
  }

  viewTransfer() {
    this.router.navigate(['transfer']);
  }
}
