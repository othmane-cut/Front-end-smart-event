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
  defaultEmail = 'othmane@example.com';
  defaultPassword = 'password123';
  email = '';
  password = '';
  

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  onCheckUser() {
    if (this.email === this.defaultEmail && this.password === this.defaultPassword) {
      this.router.navigate(['/dashboard']);
       
    } else {
      alert('Invalid email or password.');
    }
}


  constructor(private router: Router) {}
}

