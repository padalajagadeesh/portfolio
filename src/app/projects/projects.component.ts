import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'E-commerce Dashboard',
      description: 'A dashboard for managing e-commerce sales and products.',
      link: 'https://github.com/johndoe/ecommerce-dashboard'
    },
    {
      name: 'Task Manager App',
      description: 'A task management application with task prioritization.',
      link: 'https://github.com/johndoe/task-manager'
    },
    {
      name: 'Weather App',
      description: 'A weather forecasting app using OpenWeather API.',
      link: 'https://github.com/johndoe/weather-app'
    }
  ];
}
