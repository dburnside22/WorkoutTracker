import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navClicked = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public toggleNavigation() {
    this.navClicked = !this.navClicked;
  }
}
