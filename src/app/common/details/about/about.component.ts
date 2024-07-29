import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMotorcycle, faTableTennisPaddleBall, faGamepad, faDumbbell, faRunning, faBicycle, faVolleyball, faMusic,faHeadphones, faEarthAsia, faMicrochip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  faMotorcycle = faMotorcycle;
  faGamepad = faGamepad;
  faTableTenis = faTableTennisPaddleBall;
  faDumbbell = faDumbbell;
  faRunning = faRunning;
  faBicycle = faBicycle;
  faVolleyball = faVolleyball;
  faMusic = faMusic;
  faHeadphones = faHeadphones;
  faEarthAsia = faEarthAsia;
  faMicrochip = faMicrochip;
}
