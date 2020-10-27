import { Component } from '@angular/core';
import {SizingService} from "./services/sizing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  initData = {

  };

  onScrollEvent(data) {
    console.log("onScrollEvent", data);

  }
  data= {name: 'human', height: 175, description: 'homo sapiens', imageURL: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg'}

  constructor(private service: SizingService) {

  }

}
