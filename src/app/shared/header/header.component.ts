import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
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
    this.router.events.subscribe((routerData) => {
      if(routerData instanceof ResolveEnd){
         if(routerData.url === '/sign-in' || routerData.url === '/sign-up') {
           this.hideDrawer = false;
         } else {
           this.hideDrawer = true;
         }
      }
    })
   }

  ngOnInit(): void {
  }


}
