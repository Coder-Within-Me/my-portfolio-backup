import { Component, inject, signal } from '@angular/core';
import { SkillsComponent } from '../../skills/skills.component';
import { StylingService } from '../../../service/styling.service';
import { ToolsUsedComponent } from '../../tools-used/tools-used.component';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SkillsComponent, ToolsUsedComponent, CardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  startDateTotal = new Date('2020-12-31');
  startDate = new Date('2023-03-01');
  timespan = signal<string>('1 month');
  timespanTotal = signal<string>('1 month');

  stylingService = inject(StylingService);

  currentColor: string = '';

  constructor(){
    this.timespan.set(this.formatYearsAndMonths(this.startDate));
    this.timespanTotal.set(this.formatYearsAndMonths(this.startDateTotal));
  }

  changeColor() {
    this.currentColor = this.stylingService.getRandomBgColor();
  }

  formatYearsAndMonths(startDate: Date): string {
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    let result = '';
    if (years > 0) {
        result += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
        if (result.length > 0) {
            result += " ";
        }
        result += `${months} month${months > 1 ? 's' : ''}`;
    }

    return result || "1 month";
  }
}
