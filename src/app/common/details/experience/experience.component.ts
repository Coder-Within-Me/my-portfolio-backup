import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  startDateTotal = new Date('2020-12-31');
  startDate = new Date('2023-03-01');
  timespan = signal<string>('1 month');
  timespanTotal = signal<string>('1 month');

  constructor(){
    this.timespan.set(this.formatYearsAndMonths(this.startDate));
    this.timespanTotal.set(this.formatYearsAndMonths(this.startDateTotal));
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
