import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  standalone: true,
  imports: [TableModule],
})
export class UserTableComponent implements OnInit {

  users: User[] = [];

  ngOnInit(): void {
    this.users = [
      {
        id: 1,
        username: 'johndoe',
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        age: 35,
        isActive: true,
      },
      {
        id: 2,
        username: 'janedoe',
        fullName: 'Jane Doe',
        email: 'jane.doe@example.com',
        age: 30,
        isActive: false,
      },
      {
        id: 3,
        username: 'michelangelo',
        fullName: 'Michelangelo Buonarroti',
        email: 'michelangelo@example.com',
        age: 58,
        isActive: false,
      },
      {
        id: 4,
        username: 'leonardodavinci',
        fullName: 'Leonardo da Vinci',
        email: 'leonardo@example.com',
        age: 67,
        isActive: true,
      },
      {
        id: 5,
        username: 'marie_curie',
        fullName: 'Marie Curie',
        email: 'marie@example.com',
        age: 66,
        isActive: true,
      },
      {
        id: 6,
        username: 'albert_einstein',
        fullName: 'Albert Einstein',
        email: 'albert@example.com',
        age: 76,
        isActive: true,
      },
      {
        id: 7,
        username: 'stephenhawking',
        fullName: 'Stephen Hawking',
        email: 'stephen@example.com',
        age: 76,
        isActive: false,
      },
      {
        id: 8,
        username: 'ada_lovelace',
        fullName: 'Ada Lovelace',
        email: 'ada@example.com',
        age: 36,
        isActive: false,
      },
      {
        id: 9,
        username: 'marie_anne_pierrette_paulze',
        fullName: 'Marie-Anne Pierrette Paulze (Madame Curie)',
        email: 'marieanne@example.com',
        age: 66,
        isActive: true,
      },
      {
        id: 10,
        username: 'nelson_mandela',
        fullName: 'Nelson Mandela',
        email: 'nelson@example.com',
        age: 95,
        isActive: false,
      },
    ];
  }
}
