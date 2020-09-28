import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Counter App';

  // tslint:disable-next-line: no-inferrable-types
  count: number = 0;

  handleDecrease = () => {
    if (this.count !== 0) {
      this.count -= 1;
    }
    // tslint:disable-next-line: semicolon
  };

  handleReset = () => {
    this.count = 0;
    // tslint:disable-next-line: semicolon
  };

  handleIncrease = () => {
    if (this.count !== 10) {
      this.count += 1;
    }
    // tslint:disable-next-line: semicolon
  };
}
