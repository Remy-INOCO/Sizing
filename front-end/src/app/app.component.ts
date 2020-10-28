import { Component, OnInit } from '@angular/core';
import { SizingService } from "./services/sizing.service";
import { ISizing } from "./models/sizing";
import { Observable, fromEvent, Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private isDestroy$ = new Subject();
  data: ISizing;

  constructor(private service: SizingService) { }

  ngOnInit(): void {
    this.getData(this.service.getInitData());

    fromEvent(document, 'wheel').pipe(takeUntil(this.isDestroy$)).subscribe(event => this.checkScrollDirection(event));
  }

  checkScrollDirection(event) {
    this.getData(this.service.getDataWithParam(this.data.name, event.wheelDelta > 0 ? 'taller' : 'lower'));
  }

  getData(data$: Observable<ISizing>): void {
    data$.pipe(takeUntil(this.isDestroy$)).subscribe(data => this.data = data);
  }
}
