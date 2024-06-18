import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {

  public menuItems =  routes
  .map((route) => route.children ?? [])
  .flat()
  .filter(router => router && router.path)
  .filter(router=> !router.path?.includes(':'))


  constructor() {

  }
}
