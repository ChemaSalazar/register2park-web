import { Component } from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterLink, RouterOutlet} from '@angular/router';
import {  } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'register2park';
}
