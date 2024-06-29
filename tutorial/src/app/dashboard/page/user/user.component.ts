import { CommonModule } from '@angular/common';
import {  Component, inject} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { TitelComponent } from '../../../shared/titel/titel.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule, TitelComponent ],
  template:`


   <app-titel title="User"></app-titel>
    @if( user() ){

      <section>
        <img

        />
      </section>


    } @else {
    <p>
      Cargando informacion ...
    </p>
   }

   `

})

export default class UserComponent {


  private route = inject( ActivatedRoute)
  private UsersService = inject( UsersService)

  public user = toSignal(
    this.route.params.pipe(
      switchMap(async ({ id }) => this.UsersService.getUserById(id))
    )
  )

}





