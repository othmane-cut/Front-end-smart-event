import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup.component',
  imports: [],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
})
export class SingupComponent {
  constructor(private router: Router) {}

  onBackToLogin() {
    this.router.navigate(['/login']);
  }

}
