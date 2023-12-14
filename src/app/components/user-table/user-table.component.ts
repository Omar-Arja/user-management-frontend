import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AsyncPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/reducers/user.reducer';
import { getUsers } from '../../store/selectors/user.selectors';
import * as UserActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  standalone: true,
  imports: [TableModule, AsyncPipe, DatePipe],
})
export class UserTableComponent implements OnInit {
  users$: Observable<User[]> = this.store.select(getUsers);
  users: User[] = [];

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
    this.users$.subscribe(
      (users) => {
        const usersArray = (users as unknown as { users: User[] }).users;
        this.users = usersArray;
      },
    );
  }
}
