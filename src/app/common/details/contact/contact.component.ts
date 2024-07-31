import { Component } from '@angular/core';
import { SocialIconsComponent } from '../../profile/social-icons/social-icons.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialIconsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
