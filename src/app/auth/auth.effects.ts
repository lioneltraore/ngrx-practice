import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) {
    this.actions$.subscribe(action => {

      if(action.type == '[Login page] User login') {
        console.log('side effect triggered');
        localStorage.setItem('user', JSON.stringify(action['user']));
      }

    })
  }

}
