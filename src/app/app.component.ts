import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './common/profile/profile-details/profile-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark, faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ProfileDetailsComponent,RouterModule,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faBars = faBars;
  faXmark = faXmark;
  faCopyright = faCopyright;

  menuOpen = false;

  toggleMenu() {
    this.menuOpen  = !this.menuOpen;
  }
}
