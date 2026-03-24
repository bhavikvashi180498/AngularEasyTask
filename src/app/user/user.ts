import { Component, computed, input, output } from '@angular/core';
import { UserModel } from '../services/user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserModel>();
  imagePath = computed(() => '/images/users/' + this.user().avatar);
  userChanged = output<string>();

  changeUser() {
    this.userChanged.emit(this.user().id);
  }
}
