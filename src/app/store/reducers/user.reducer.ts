import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../../models/user.model';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),

  on(UserActions.addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  
  on(UserActions.updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map((u) => (u.id === user.id ? { ...u, ...user } : u)),
  })),

  on(UserActions.deleteUser, (state, { userId }) => ({
    ...state,
    users: state.users.filter((u) => u.id !== userId),
  }))
);
