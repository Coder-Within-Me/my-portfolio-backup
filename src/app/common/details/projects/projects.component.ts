import { Component, inject } from '@angular/core';
import { StylingService } from '../../../service/styling.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  stylingService = inject(StylingService);

  currentColor: string = '';

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }
}
