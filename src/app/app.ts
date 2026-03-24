import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./common/header/header";
import { UserModel } from './services/user.model';
import { DUMMY_USERS } from './services/user.service';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  users: UserModel[] = DUMMY_USERS;
  selectedUserId = signal<string | null>(null);

  selectedUser = computed<UserModel>(() => {
    return this.users.find(user => user.id === this.selectedUserId())!;
  });


  //change the selected user
  changeUser(id: string) {
    this.selectedUserId.set(id);
  }

}
