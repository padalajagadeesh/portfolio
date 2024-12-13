import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Intermediate' }
  ];
}
