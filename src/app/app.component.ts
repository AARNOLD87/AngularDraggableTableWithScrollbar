import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import * as autoScroll from 'dom-autoscroller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private sub: Subscription;

  title = 'Angural Drag Column In Scrollable Table';
  columns: string[];

  constructor(dragulaService: DragulaService, private elemRef: ElementRef) {
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
      result.push('Column_' + (i + 1));
    }

    return result;
  }

  private orderColumn(data: { column: any, oldPosition: number, newPosition: number }) {
    this.columns.splice(data.oldPosition, 1);
    this.columns.splice(data.newPosition, 0, data.column as any);
  }


  ngAfterViewInit(): void {
    const elem = Array.from(this.elemRef.nativeElement.querySelectorAll('.table-container'));

    autoScroll(elem, {
      margin: 30,
      maxSpeed: 10,
      scrollWhenOutside: true,
      autoScroll() {
        return this.down;
      }
    });
  }
}
