import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private sub: Subscription;

  title = 'AnguralDragColumnInScrollableTable';
  columns: string[];

  constructor(dragulaService: DragulaService) {
    this.columns = this.loadColumns();

    this.sub = dragulaService.dropModel()
      .subscribe(({ name, item, targetIndex, sourceIndex }) => {
        if (name === 'table_columns') {
          this.orderColumn({ column: item, oldPosition: sourceIndex, newPosition: targetIndex});
        }
      });
  }

  private loadColumns(): string[] {
    const result = [];
    for (let i = 0; i < 50; i++) {
      result.push('Column' + i);
    }

    return result;
  }

  private orderColumn(data: { column: any, oldPosition: number, newPosition: number }) {
    this.columns.splice(data.oldPosition, 1);
    this.columns.splice(data.newPosition, 0, data.column as any);
  }

}
