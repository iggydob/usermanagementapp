import { Component, OnInit } from '@angular/core';

import { User } from '../../interface/user';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => this.users = data,
      (error: any) => console.error(error)
    );
  }

  updateUser(user: User): void {
    this.userService.updateUserDetails(user).subscribe(
      (updatedUser: User) => {
        const index = this.users.findIndex(u => u.email === updatedUser.email);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
      },
      (error: any) => console.error(error)
    );
  }

  createUser(user: User): void {
    this.userService.createUser(user).subscribe(
      (newUser: User) => this.users.push(newUser),
      (error: any) => console.error(error)
    );
  }

  getUserByEmail(email: string): void {
    this.userService.getUserByEmail(email).subscribe(
      (user: User) => this.selectedUser = user,
      (error: any) => console.error(error)
    );
  }

  deleteUser(email: string): void {
    this.userService.deleteUser(email).subscribe(
      () => this.users = this.users.filter(user => user.email !== email),
      (error: any) => console.error(error)
    );
  }
}
