import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  isLoged: Boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToUsers() {
    this.router.navigate(['/users']);
  }

  navigateToPosts() {
    this.router.navigate(['/posts']);
  }

  navigateToProperties() {
    this.router.navigate(['/properties']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToLogout() {
    this.authService.logout();
    window.location.href = ('/login');
    // this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.isLoged = this.authService.getToken()?.length == 228;
  }

}

