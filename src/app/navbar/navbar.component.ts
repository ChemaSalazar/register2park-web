import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";
import {ButtonsModule} from "ngx-bootstrap/buttons";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgIf,
    ButtonsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(protected authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login or home page
  }

  protected readonly ButtonsModule = ButtonsModule;
}
