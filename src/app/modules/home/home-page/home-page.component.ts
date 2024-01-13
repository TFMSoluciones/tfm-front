import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Input() showComercialSection: boolean = false;
  showUgCS: boolean = true;
  showAuthentication: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
