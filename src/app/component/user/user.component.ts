import {Component, OnInit} from '@angular/core';
import {User} from "../../interface/user";
import {UserService} from "../../service/user.service";
import {CustomHttpResponse, Profile} from "../../interface/appstates";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  users: User[] = [];
  selectedEmail: string = 'john.doe@example.com';
  user: User | null = null;


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserByEmail();
  }

  // getAllUsers(): void {
  //   this.userService.getAllUsers().subscribe(
  //     (users) => this.users = users,
  //     (error) => console.error(error)
  //   );
  // }
  //
  // createUser(): void {
  //   this.userService.createUser(this.newUser).subscribe(
  //     (user) => {
  //       this.users.push(user);
  //       this.newUser = new User();
  //     },
  //     (error) => console.error(error)
  //   );
  // }
  //

  getUserByEmail(): void {
    this.userService.getUserByEmail(this.selectedEmail).subscribe(
      (user) => this.user = user,
      (error) => console.error(error)
    );
  }

  //
  // deleteUser(email: string): void {
  //   this.userService.deleteUser(email).subscribe(
  //     () => this.users = this.users.filter(u => u.email !== email),
  //     (error) => console.error(error)
  //   );
  // }
}

