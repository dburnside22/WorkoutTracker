import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navClicked = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleNavigation() {
    this.navClicked = !this.navClicked;
  }
}
