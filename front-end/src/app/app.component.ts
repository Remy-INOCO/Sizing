import { Component } from '@angular/core';
import {SizingService} from "./services/sizing.service";
import {ISizing} from "./models/sizing";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 data$: Observable<ISizing>;
 dataName: string;

  constructor(private service: SizingService) {
    this.data$ = this.service.getInitData();
   window.addEventListener('wheel', this.checkScrollDirection, true)
this.data$.subscribe(data => {
  this.dataName = data.name
})

  }

    checkScrollDirection(event) {
      console.log(event.wheelDelta)
    this.data$ = this.service.getDataWithParam(this.dataName, event.wheelDelta > 0 ? 'taller' : 'lower');
  }
  
   
}
