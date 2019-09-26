import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AnguralDragColumnInScrollableTable';
  columns: string[];

  constructor() {
    this.columns = this.loadColumns();
  }

  private loadColumns(): string[] {
    const result = [];
    for (let i = 0; i < 50; i++) {
      result.push('Column' + i);
    }

    return result;
  }

}
