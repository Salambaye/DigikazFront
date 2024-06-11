import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    isLoginLoading: Boolean = true;
    loginForm: FormGroup;
    errorMessage: string = '';


    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });

    }
    ngOnInit(): void {
        setTimeout(() => {
            this.isLoginLoading = false;
        }, 100);
    }

    onSubmit() {

        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;

        this.authService.login(username, password).subscribe(
            (response) => {
                this.authService.setToken(response.access)
                window.location.href = ('/')
            },
            (error) => {
                console.log(error);
            }
        );


    }

}
