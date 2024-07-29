import { Routes } from '@angular/router';
import { AboutComponent } from './common/details/about/about.component';
import { ContactComponent } from './common/details/contact/contact.component';
import { ProjectsComponent } from './common/details/projects/projects.component';
import { ExperienceComponent } from './common/details/experience/experience.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', redirectTo: '/about' }
];
