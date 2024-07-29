import { Component } from '@angular/core';
import { SocialIconsComponent } from '../social-icons/social-icons.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [SocialIconsComponent],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  constructor(private router : Router){}

  navigateToAbout(){
    this.router.navigate(['about']);
  }
}
