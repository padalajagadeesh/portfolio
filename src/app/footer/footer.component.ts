import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  rows: number = 0; // to store the number of rows
  cols: number = 0; // to store the number of columns
  grid: number[][] = []; // to store the grid

  // Function to generate the grid based on user input
  generateGrid(): void {
    this.grid = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.cols; j++) {
        row.push(0); // You can set default value here
      }
      this.grid.push(row);
    }
  }
}
