import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { SkillsComponent } from '../../skills/skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule,SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  faCheckCircle = faCheckCircle;
}
