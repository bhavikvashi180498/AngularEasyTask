import { Component, signal, computed } from '@angular/core';
import { UserModel } from './services/user.model';
import { DUMMY_USERS } from './services/user.service';


@Component({
  selector: 'app-root',
  standalone: false,
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
