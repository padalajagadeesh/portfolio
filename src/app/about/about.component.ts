import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Jagadeesh';
  role = 'Frontend Developer (Angular)';
  description = `I am a passionate frontend developer with over 4 years of experience in building responsive, user-friendly web applications using Angular. I specialize in creating dynamic and engaging interfaces, focusing on performance, accessibility, and scalability.`;
}
