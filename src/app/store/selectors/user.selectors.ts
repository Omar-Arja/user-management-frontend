import { createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const getUsers = createSelector(
    (state: UserState) => state.users,
    (users) => users
);