import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.css'
})
export class SocialIconsComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faXTwitter = faXTwitter;
  faEnvelope = faEnvelope;
  faCopyright = faCopyright;
}
