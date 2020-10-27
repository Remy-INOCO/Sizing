import { Component } from '@angular/core';

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

  data= {name: 'toto', height: 1.75, description: 'super mec', imageURL: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg'}
}
