import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomUserFormValidators } from './validators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  userForm: FormGroup;
  errorMessage: string = "";
  selectedFiles: File[] = [];
  isCreateUsersLoading: boolean = true;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.fb.group({
      username: [Validators.required],
      email: [[Validators.required,]],
      isloc: [[Validators.required, CustomUserFormValidators.typeValidator]],
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isCreateUsersLoading = false;
    }, 100);
  }
  viewUsers() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    const userValues = this.userForm.value;
    this.userService.createUser(userValues).subscribe(
      (response) => {
        console.log('user saved succesfully');
        console.log(response);
      },
      (error) => {
        console.log('=========> Observable error.')
        this.errorMessage = "Amnaa louyy deconner dehh";
      }
    )
  }


}
