import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular';

  ngOnInit(){
    let z = 3;
let x = z++;
console.log(x);
console.log(z); 

  }
  // form(){
    
  // }
}
