import { Component, computed, input, output } from '@angular/core';
import { UserModel } from '../services/user.model';
import { Card } from "../common/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserModel>();
  selectedUser = input.required<boolean>();
  imagePath = computed(() => '/images/users/' + this.user().avatar);
  userChanged = output<string>();

  changeUser() {
    this.userChanged.emit(this.user().id);
  }
}
