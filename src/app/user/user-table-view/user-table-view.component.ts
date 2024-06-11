import { Component, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-user-table-view',
  templateUrl: './user-table-view.component.html',
  styleUrls: ['./user-table-view.component.css']
})
export class UserTableViewComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // pageSize = 1;
  pageIndex = 1;
  pageSizeOptions: number[] = [2, 5, 10, 20];
  totalUsersCount!: number;

  mySearch: FormGroup;
  users: User[] = [];
  isUsersLoading: boolean = true;
  displayedColumns: string[] = ['id', 'username', 'email', 'isloc', 'action'];
  searchTerm: string = '';


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.mySearch = this.fb.group({
      search: ['']
    })
  }

  ngOnInit(): void {
    this.userService.fetchAllUsers();
    // Subscribe to the observable for users
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.isUsersLoading = false;
    });

    console.log(this.loadUsers());
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getPaginatedUsers(this.pageIndex).subscribe({
      next: (result) => {
        this.users = result.results;
        this.totalUsersCount = result.count;
        this.isUsersLoading = false;
      },
      error: (error) => {
        console.error('Error loading users', error);
        this.isUsersLoading = false;
      }
    });
  }

  searchUsers(): void {
    const searchTerm = this.mySearch.get('search')?.value;
    if (!searchTerm) {
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
      return;
    }

    this.userService.getUsers().subscribe(users => {
      const filteredUsers = users.filter(user =>
        user.id.toString().includes(searchTerm)
      );

      this.users = filteredUsers;

      console.log('filteredUsers', filteredUsers)
    });
  }

  addUser() {
    this.router.navigate(['add-user'])
  }

  viewUser(userId: number) {
    const res = alert("Do you wanna open ?");
    if (userId) {
      console.log('Ok');
    } else {
      console.log('No OK');
    }
  }

  editUser(userId: number) {
    const res = alert("Do you wanna edit ?");
    if (userId) {
      console.log('Ok');
    } else {
      console.log('No OK');
    }
  }


  deleteUser(userId: number) {
    const res = alert("Do you wanna delete ?");
    if (userId) {
      console.log('Ok');
    } else {
      console.log('No OK');
    }
  }

}
