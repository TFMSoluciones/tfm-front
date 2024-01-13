import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() showUgCS: boolean = true;
  @Input() showAuthentication: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
