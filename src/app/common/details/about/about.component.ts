import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { StylingService } from '../../../service/styling.service';
import { SkillsComponent } from '../../skills/skills.component';
import { CardComponent } from '../../card/card.component';
import { ToolsUsedComponent } from '../../tools-used/tools-used.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, SkillsComponent,CardComponent,ToolsUsedComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  stylingService = inject(StylingService);

  faCheckCircle = faCheckCircle;

  currentColor: string = '';

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }
}
