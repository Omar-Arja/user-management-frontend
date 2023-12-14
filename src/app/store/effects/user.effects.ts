import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) { }
    
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService
          .getUsers()
          .pipe(map((users) => UserActions.loadUsersSuccess({ users })))
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUser),
      mergeMap(({ user }) =>
        this.userService.addUser(user).pipe(map(() => UserActions.loadUsers()))
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap(({ user }) =>
        this.userService
          .updateUser(user)
          .pipe(map(() => UserActions.loadUsers()))
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      mergeMap(({ userId }) =>
        this.userService
          .deleteUser(userId)
          .pipe(map(() => UserActions.loadUsers()))
      )
    )
  );
}
