import { Component } from '@angular/core';
import { ReusebuleComponent } from '../reusebule/reusebule.component';
import * as AOS from 'aos';  // Import AOS
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('buttonHover', [
      state('normal', style({
        transform: 'scale(1)',
        backgroundColor: '#5c6bc0'
      })),
      state('hovered', style({
        transform: 'scale(1.1)',
        backgroundColor: '#3f51b5'
      })),
      transition('normal <=> hovered', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class MainComponent extends ReusebuleComponent {
  name = 'Jagadeesh';
  role = 'Frontend Developer';
  intro = `I am a passionate and results-driven Frontend Developer with expertise in Angular, JavaScript, and web development best practices. I love building user-friendly, high-performance websites that deliver seamless experiences.`;
  skills = ['Angular', 'JavaScript', 'HTML/CSS', 'TypeScript', 'Git', 'UI/UX Design'];
  projects = [
    {
      name: 'E-commerce Dashboard',
      description: 'An interactive dashboard to manage an online store with product management and sales analytics.',
      link: 'https://github.com/johndoe/ecommerce-dashboard'
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my work and skills.',
      link: 'https://github.com/johndoe/portfolio-website'
    },
    {
      name: 'Weather App',
      description: 'A weather app that fetches data from an external API and displays current weather conditions.',
      link: 'https://github.com/johndoe/weather-app'
    }
  ];
ngOnInit() {
  this.dummyMethod()
  // Initialize AOS animations
  AOS.init();
}
buttonState: string = 'normal';

  onButtonHover() {
    this.buttonState = this.buttonState === 'normal' ? 'hovered' : 'normal';
  }
  form(){
    
  }
}
