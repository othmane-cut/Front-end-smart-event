import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  defaultEmail = 'anas@example.com';
  defaultPassword = '123';

  email = '';
  password = '';

  isShaking = false; // ✅ controls shake animation state

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  onCheckUser() {
    if (this.email === this.defaultEmail && this.password === this.defaultPassword) {
      this.router.navigate(['/dashboard']);
    } else {
      this.shakeDiv();         // ✅ trigger animation when invalid
      
    }
  }

  // ✅ Function that triggers shake animation
  private shakeDiv() {
    this.isShaking = true;

    setTimeout(() => {
      this.isShaking = false;
    }, 400); // same duration as CSS animation
  }

  onCreateAccount() {
    this.router.navigate(['/singup']);
  }

  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

}

