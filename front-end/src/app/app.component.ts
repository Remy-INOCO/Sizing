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


  constructor(private service: SizingService) {
    this.data$ = this.service.getInitData();
  }

  onScrollEvent(data) {
    console.log("onScrollEvent", data);

  }
}
