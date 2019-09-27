import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import * as autoScroll from 'dom-autoscroller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private sub: Subscription;

  title = 'Angural Drag Column In Scrollable Table';
  columns: string[];
  rows: any[];

  constructor(dragulaService: DragulaService, private elemRef: ElementRef) {
    this.fillTable();

    // this.sub = dragulaService.dropModel()
    //   .subscribe(({ item, targetIndex, sourceIndex }) => {
    //     this.orderColumn({ column: item, oldPosition: sourceIndex, newPosition: targetIndex});
    //   });
  }

  private fillTable() {
    this.columns = [];

    const row = [];
    for (let i = 0; i < 50; i++) {
      const columnLabel = 'Column_' + (i + 1);
      this.columns.push(columnLabel);
      row[columnLabel] = 'Data_' + (i + 1);
    }

    this.rows = [row, row, row, row, row];
  }

  private orderColumn(data: { column: any, oldPosition: number, newPosition: number }) {
    this.columns.splice(data.oldPosition, 1);
    this.columns.splice(data.newPosition, 0, data.column as any);
  }
}
