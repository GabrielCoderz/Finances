import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public openedDrawer: boolean = false;
  public hideDrawer: boolean = false;


  constructor(private router: Router) {
    if(this.router.url === '/sign-in' || this.router.url === '/sign-up') {
      this.hideDrawer = true;
    }
   }

  ngOnInit(): void {
  }


}
