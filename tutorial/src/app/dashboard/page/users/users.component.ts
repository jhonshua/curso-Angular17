import { CommonModule } from '@angular/common';
import {  Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitelComponent } from '../../../shared/titel/titel.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitelComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})


export default class UsersComponent {


  public UsersService = inject( UsersService )

 }
